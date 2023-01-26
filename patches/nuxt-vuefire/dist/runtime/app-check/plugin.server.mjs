import { VueFireAppCheckServer } from "vuefire/server";
import { defineNuxtPlugin } from "#app";
export default defineNuxtPlugin((nuxtApp) => {
  const firebaseApp = nuxtApp.$firebaseApp;
  const adminApp = nuxtApp.$firebaseAdminApp;
  if (!firebaseApp.options.appId) {
    throw new Error(
      '[nuxt-vuefire]: Missing "appId" in firebase config. This is necessary to use the app-check module on the server.'
    );
  }
  VueFireAppCheckServer(nuxtApp.vueApp, adminApp, firebaseApp);
});
