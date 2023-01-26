import { initializeApp } from "firebase/app";
import { defineNuxtPlugin, useAppConfig } from "#app";
export default defineNuxtPlugin(() => {
  const appConfig = useAppConfig();
  const firebaseApp = initializeApp(appConfig.firebaseConfig);
  return {
    provide: {
      firebaseApp
    }
  };
});
