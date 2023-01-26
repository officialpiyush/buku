import type { FirebaseApp } from 'firebase/app';
/**
 * Gets the firebase instance from the current Nuxt App. This can be used anywhere the `useNuxtApp()` can be used. Differently from `vuefire`'s `useFirebaseApp()`, this doesn't accept a name.
 */
export declare const useFirebaseApp: () => FirebaseApp;
