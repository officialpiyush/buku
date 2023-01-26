import {
  ReCaptchaV3Provider,
  ReCaptchaEnterpriseProvider,
  CustomProvider
} from "firebase/app-check";
import { VueFireAppCheck } from "vuefire";
import { defineNuxtPlugin, useAppConfig } from "#app";
export default defineNuxtPlugin((nuxtApp) => {
  const appConfig = useAppConfig();
  const options = appConfig.vuefireOptions.appCheck;
  const firebaseApp = nuxtApp.$firebaseApp;
  let provider;
  if (options.provider === "ReCaptchaV3") {
    provider = new ReCaptchaV3Provider(options.key);
  } else if (options.provider === "ReCaptchaEnterprise") {
    provider = new ReCaptchaEnterpriseProvider(options.key);
  } else {
    provider = new CustomProvider({
      getToken: () => Promise.reject(
        process.env.NODE_ENV !== "production" ? new Error(
          `[nuxt-vuefire]: Unknown Provider "${// @ts-expect-error: options.provider is never here
          options.provider}".`
          // eslint-disable-next-line indent
        ) : new Error("app-check/invalid-provider")
      )
    });
  }
  VueFireAppCheck({
    ...options,
    provider
  })(firebaseApp, nuxtApp.vueApp);
});
