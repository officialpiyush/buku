import { NuxtModule } from '@nuxt/schema';
import { FirebaseOptions, FirebaseApp } from '@firebase/app-types';
import { App, AppOptions, ServiceAccount } from 'firebase-admin/app';
import { VueFireAppCheckOptions } from 'vuefire';

/**
 * @internal
 */
interface _NuxtVueFireAppCheckOptionsBase extends Omit<VueFireAppCheckOptions, 'provider'> {
    provider: 'ReCaptchaV3' | 'ReCaptchaEnterprise' | 'Custom';
}
interface NuxtVueFireAppCheckOptionsReCaptchaV3 extends _NuxtVueFireAppCheckOptionsBase {
    provider: 'ReCaptchaV3';
    key: string;
}
interface NuxtVueFireAppCheckOptionsReCaptchaEnterprise extends _NuxtVueFireAppCheckOptionsBase {
    provider: 'ReCaptchaEnterprise';
    key: string;
}
type NuxtVueFireAppCheckOptions = NuxtVueFireAppCheckOptionsReCaptchaV3 | NuxtVueFireAppCheckOptionsReCaptchaEnterprise;

interface VueFireNuxtModuleOptions {
    /**
     * Should we add the `VueFireFirestoreOptionsAPI` and `VueFireRealtimeDatabaseOptionsAPI` modules?. Pass `true` to add
     * both, or `'firestore'` or `'realtime-database'` to add only one. Pass false to disable.
     * @default false
     */
    optionsApiPlugin?: boolean | 'firestore' | 'database';
    /**
     * Firebase Options passed to `firebase/app`'s `initializeApp()`.
     */
    config?: FirebaseOptions;
    /**
     * Firebase Admin Options.
     */
    admin?: {
        /**
         * Firebase Admin Options passed to `firebase-admin`'s `initializeApp()`. Required if you are using the auth, or the
         * app-check module.
         */
        options?: Omit<AppOptions, 'credential'>;
        /**
         * Firebase Admin Service Account passed to `firebase-admin`'s `initializeApp()`. Required if you are adding an adminConfig.
         */
        serviceAccount?: string | ServiceAccount;
    };
    /**
     * Enables AppCheck on the client and server. Note you only need to pass the options for the client, on the server,
     * the configuration will be handled automatically.
     */
    appCheck?: NuxtVueFireAppCheckOptions;
    /**
     * Enables Authentication
     */
    auth?: boolean;
}
declare const _default: NuxtModule<VueFireNuxtModuleOptions>;

declare module '@nuxt/schema' {
    interface AppConfig {
        /**
         * Firebase config to initialize the app.
         * @internal
         */
        firebaseConfig: FirebaseOptions;
        /**
         * VueFireNuxt options used within plugins.
         * @internal
         */
        vuefireOptions: Pick<VueFireNuxtModuleOptions, 'appCheck' | 'auth'>;
        /**
         * Firebase Admin options passed to VueFire module. Only available on the server.
         * @internal
         */
        firebaseAdmin?: VueFireNuxtModuleOptions['admin'];
    }
}
declare module '#app' {
    interface NuxtApp {
        /**
         * Firebase App instance.
         */
        $firebaseApp: FirebaseApp;
        /**
         * Firebase Admin app. Only available on the server.
         */
        $firebaseAdminApp: App;
    }
}
declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        /**
         * Firebase App instance.
         */
        $firebaseApp: FirebaseApp;
        /**
         * Firebase Admin app. Only available on the server.
         */
        $firebaseAdminApp: App;
    }
}

export { NuxtVueFireAppCheckOptions, NuxtVueFireAppCheckOptionsReCaptchaEnterprise, NuxtVueFireAppCheckOptionsReCaptchaV3, VueFireNuxtModuleOptions, _default as default };
