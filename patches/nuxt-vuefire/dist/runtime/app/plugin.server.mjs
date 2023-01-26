import { deleteApp, initializeApp } from "firebase/app";
import LRU from "lru-cache";
import { UserSymbol } from "../constants.mjs";
import { defineNuxtPlugin, useAppConfig } from "#app";
export const LRU_MAX_INSTANCES = 100;
export const LRU_TTL = 1e3 * 60 * 5;
const appCache = new LRU({
  max: LRU_MAX_INSTANCES,
  ttl: LRU_TTL,
  allowStale: true,
  updateAgeOnGet: true,
  dispose: (value) => {
    deleteApp(value);
  }
});
export default defineNuxtPlugin((nuxtApp) => {
  const appConfig = useAppConfig();
  const user = nuxtApp[
    // we cannot use a symbol to index
    UserSymbol
  ];
  const uid = user?.uid;
  let firebaseApp;
  if (uid) {
    if (!appCache.has(uid)) {
      const randomId = Math.random().toString(36).slice(2);
      const appName = `auth:${user.uid}:${randomId}`;
      appCache.set(uid, initializeApp(appConfig.firebaseConfig, appName));
    }
    firebaseApp = appCache.get(uid);
  } else {
    firebaseApp = initializeApp(appConfig.firebaseConfig);
  }
  return {
    provide: {
      firebaseApp
    }
  };
});
