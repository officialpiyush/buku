import { useNuxtApp } from "#app";
export const useFirebaseApp = () => useNuxtApp().$firebaseApp;
