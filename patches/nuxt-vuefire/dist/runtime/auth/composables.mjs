import { getCurrentUser as _getCurrentUser } from "vuefire";
import { useFirebaseApp } from "../app/composables.mjs";
export const getCurrentUser = (name) => (
  // This makes the `getCurrentUser()` function work by default in more places when using the Nuxt module
  _getCurrentUser(name ?? useFirebaseApp().name)
);
