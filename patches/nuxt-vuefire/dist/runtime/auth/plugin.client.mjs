import { VueFireAuth } from "vuefire";
import { defineNuxtPlugin } from "#app";
export default defineNuxtPlugin((nuxtApp) => {
  const firebaseApp = nuxtApp.$firebaseApp;
  VueFireAuth(nuxtApp.payload.vuefireUser)(firebaseApp, nuxtApp.vueApp);
});
