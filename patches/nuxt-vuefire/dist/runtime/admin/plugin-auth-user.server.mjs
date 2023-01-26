import { getAuth as getAdminAuth } from "firebase-admin/auth";
import { createServerUser } from "vuefire/server";
import { getCookie } from "h3";
import { log } from "../logging.mjs";
import { UserSymbol } from "../constants.mjs";
import { defineNuxtPlugin, useRequestEvent } from "#app";
export default defineNuxtPlugin(async (nuxtApp) => {
  const event = useRequestEvent();
  const token = getCookie(event, AUTH_COOKIE_NAME);
  let user;
  if (token) {
    const adminApp = nuxtApp.$firebaseAdminApp;
    const adminAuth = getAdminAuth(adminApp);
    try {
      const decodedToken = await adminAuth.verifyIdToken(token);
      user = await adminAuth.getUser(decodedToken.uid);
    } catch (err) {
      if (isFirebaseError(err) && err.code === "auth/id-token-expired") {
        log("info", "Token expired -", err);
      } else {
        log("error", "Unknown Error -", err);
      }
    }
  }
  nuxtApp.payload.vuefireUser = user?.toJSON();
  nuxtApp[
    // we cannot use symbol to index
    UserSymbol
  ] = createServerUser(user);
});
function isFirebaseError(err) {
  return err != null && "code" in err;
}
const AUTH_COOKIE_NAME = "__session";
