import { VueFireAuthServer } from "vuefire/server";
import { UserSymbol } from "../constants.mjs";
import { defineNuxtPlugin } from "#app";
export default defineNuxtPlugin((nuxtApp) => {
  const firebaseApp = nuxtApp.$firebaseApp;
  const user = nuxtApp[
    // we cannot use symbol to index
    UserSymbol
  ];
  VueFireAuthServer(firebaseApp, nuxtApp.vueApp, user);
});
