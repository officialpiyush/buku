import { fileURLToPath } from 'node:url';
import { normalize } from 'node:path';
import { resolvePath, defineNuxtModule, createResolver, addServerHandler, addPlugin, addImports, addPluginTemplate } from '@nuxt/kit';
import { markRaw } from 'vue';

async function addMissingAlias(aliases, libToCheck, filename) {
  if (!aliases[libToCheck]) {
    const resolvedLibFolder = await resolvePath(libToCheck);
    const resolvedLibFile = resolvedLibFolder.slice(0, resolvedLibFolder.lastIndexOf("dist")) + "dist/" + filename;
    aliases[libToCheck] = resolvedLibFile;
  }
}

function log(...args) {
  const [typeOrLog, ...rest] = args;
  if (isLogType(typeOrLog)) {
    console[typeOrLog]("[nuxt-vuefire]:", ...rest);
  } else {
    console.log("[nuxt-vuefire]:", ...args);
  }
}
function isLogType(logType) {
  return logType === "debug" || logType === "info" || logType === "warn" || logType === "error" || logType === "trace";
}

const module = defineNuxtModule({
  meta: {
    name: "vuefire",
    configKey: "vuefire",
    compatibility: {
      nuxt: "^3.0.0"
    }
  },
  defaults: {
    optionsApiPlugin: false
  },
  setup(options, nuxt) {
    var _a;
    if (!options.config) {
      throw new Error(
        '[nuxt-vuefire]: Missing firebase config. Provide a "config" option to the VueFire module options.'
      );
    }
    const { resolve } = createResolver(import.meta.url);
    const runtimeDir = fileURLToPath(new URL("./runtime", import.meta.url));
    const templatesDir = fileURLToPath(new URL("../templates", import.meta.url));
    nuxt.options.appConfig.firebaseConfig = markRaw(options.config);
    nuxt.options.appConfig.vuefireOptions = markRaw(options);
    nuxt.options.build.transpile.push(runtimeDir);
    nuxt.options.build.transpile.push(templatesDir);
    nuxt.options.build.transpile.push("vuefire");
    nuxt.options.build.transpile.push("vuefire/server");
    if (typeof options.admin?.serviceAccount === "string") {
      (_a = process.env).GOOGLE_APPLICATION_CREDENTIALS || (_a.GOOGLE_APPLICATION_CREDENTIALS = options.admin.serviceAccount);
    }
    const hasServiceAccount = typeof process.env.GOOGLE_APPLICATION_CREDENTIALS === "string" && process.env.GOOGLE_APPLICATION_CREDENTIALS.length > 0 || options.admin && options.admin.serviceAccount != null && typeof options.admin.serviceAccount === "object";
    if (options.auth) {
      if (nuxt.options.ssr && !hasServiceAccount) {
        log(
          "warn",
          "You activated both SSR and auth but you are not providing an admin config. If you render or prerender any page using auth, you will get an error. In that case, provide an admin config to the nuxt-vuefire module."
        );
      }
      if (nuxt.options.ssr && hasServiceAccount) {
        addServerHandler({
          route: "/api/__session",
          handler: resolve(runtimeDir, "./auth/api.session")
        });
        addPlugin(resolve(runtimeDir, "auth/plugin-mint-cookie.client"));
      }
      addPlugin(resolve(runtimeDir, "auth/plugin.client"));
      addPlugin(resolve(runtimeDir, "auth/plugin.server"));
      addVueFireImports([
        // auth
        { from: "vuefire", name: "useFirebaseAuth" },
        { from: "vuefire", name: "useCurrentUser" }
      ]);
      addImports([
        {
          from: resolve(runtimeDir, "auth/composables"),
          name: "getCurrentUser"
        }
      ]);
    }
    if (options.appCheck) {
      addPlugin(resolve(runtimeDir, "app-check/plugin.client"));
      if (hasServiceAccount) {
        addPlugin(resolve(runtimeDir, "app-check/plugin.server"));
      } else if (nuxt.options.ssr) {
        log(
          "warn",
          "You activated both SSR and app-check but you are not providing an admin config. If you render or prerender any page using app-check, you will get an error. In that case, provide an admin config to the nuxt-vuefire module."
          // TODO: link about how to provide admin credentials
        );
      }
    }
    addPluginTemplate({
      src: normalize(resolve(templatesDir, "plugin.ejs")),
      options: {
        ...options,
        ssr: nuxt.options.ssr
      }
    });
    addPlugin(resolve(runtimeDir, "app/plugin.client"));
    addPlugin(resolve(runtimeDir, "app/plugin.server"));
    if (options.admin || nuxt.options.ssr) {
      if (!nuxt.options.ssr) {
        log(
          "warn",
          'The "admin" option is only used during SSR. You should reenable SSR to use it or remove it if you are not doing SSR or SSG.'
        );
      }
      if (options.admin) {
        nuxt.options.appConfig.firebaseAdmin = markRaw(options.admin);
      }
      if (hasServiceAccount) {
        if (options.auth) {
          addPlugin(resolve(runtimeDir, "admin/plugin-auth-user.server"));
        }
        addPlugin(resolve(runtimeDir, "admin/plugin.server"));
      }
    }
    addImports([
      // app
      {
        from: resolve(runtimeDir, "app/composables"),
        name: "useFirebaseApp"
      }
    ]);
    addVueFireImports([
      // firestore
      { from: "vuefire", name: "useFirestore" },
      { from: "vuefire", name: "useDocument" },
      { from: "vuefire", name: "useCollection" },
      // database
      { from: "vuefire", name: "useDatabase" },
      { from: "vuefire", name: "useDatabaseList" },
      { from: "vuefire", name: "useDatabaseObject" }
    ]);
    if (nuxt.options.ssr) {
      nuxt.addHooks({
        // Resolve the correct firebase/firestore path on server only since vite is resolving the wrong one in dev
        "vite:extendConfig": async (config, { isServer }) => {
          var _a2;
          config.resolve ?? (config.resolve = {});
          (_a2 = config.resolve).alias ?? (_a2.alias = {});
          const aliases = config.resolve.alias;
          const promises = [];
          if (isServer) {
            promises.push(
              addMissingAlias(aliases, "firebase/firestore", "index.mjs")
            );
            promises.push(
              addMissingAlias(aliases, "@firebase/firestore", "index.node.mjs")
            );
          }
          promises.push(addMissingAlias(aliases, "firebase/app", "index.mjs"));
          await Promise.all(promises);
        }
      });
    }
  },
  // workaround for vite
  hooks: {
    "vite:extendConfig": (viteInlineConfig, env) => {
      var _a, _b;
      viteInlineConfig.resolve ?? (viteInlineConfig.resolve = {});
      (_a = viteInlineConfig.resolve).dedupe ?? (_a.dedupe = []);
      const deps = [
        // 'vuefire',
        // 'nuxt-vuefire',
        "firebase",
        "firebase/app",
        "@firebase/app",
        "firebase/firestore",
        "@firebase/firestore",
        "firebase/auth",
        "@firebase/auth",
        "@firebase/component"
      ];
      viteInlineConfig.resolve.dedupe.push(...deps);
      viteInlineConfig.optimizeDeps ?? (viteInlineConfig.optimizeDeps = {});
      (_b = viteInlineConfig.optimizeDeps).exclude ?? (_b.exclude = []);
      viteInlineConfig.optimizeDeps.exclude.push(...deps);
    }
  }
});
function addVueFireImports(imports) {
  return addImports(imports);
}

export { module as default };
