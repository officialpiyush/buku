import {
  getAuth,
  onIdTokenChanged,
  beforeAuthStateChanged
} from "firebase/auth";
import { defineNuxtPlugin } from "#app";
export default defineNuxtPlugin((nuxtApp) => {
  const firebaseApp = nuxtApp.$firebaseApp;
  const auth = getAuth(firebaseApp);
  beforeAuthStateChanged(
    auth,
    // if this fails, we rollback the auth state
    mintCookie,
    () => {
      mintCookie(auth.currentUser);
    }
  );
  onIdTokenChanged(auth, mintCookie);
});
async function mintCookie(user) {
  const jwtToken = await user?.getIdToken(
    /* forceRefresh */
    true
  );
  await $fetch(
    // '/api/__session-server',
    "/api/__session",
    {
      method: "POST",
      // if the token is undefined, the server will delete the cookie
      body: { token: jwtToken }
    }
  );
}
