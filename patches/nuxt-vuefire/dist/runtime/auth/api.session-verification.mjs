import { getApp } from "firebase-admin/app";
import { getAuth as getAdminAuth } from "firebase-admin/auth";
import {
  readBody,
  setCookie,
  assertMethod,
  defineEventHandler,
  deleteCookie
} from "h3";
import { log } from "../logging.mjs";
export default defineEventHandler(async (event) => {
  assertMethod(event, "POST");
  const { token } = await readBody(event);
  const adminApp = getApp();
  const adminAuth = getAdminAuth(adminApp);
  const verifiedIdToken = token ? await adminAuth.verifyIdToken(token) : null;
  if (verifiedIdToken) {
    if (new Date().getTime() / 1e3 - verifiedIdToken.auth_time > ID_TOKEN_MAX_AGE) {
      event.node.res.statusCode = 301;
      return "";
    } else {
      const cookie = await adminAuth.createSessionCookie(token, { expiresIn: AUTH_COOKIE_MAX_AGE }).catch((e) => {
        log("error", "Error minting the cookie -", e.message);
      });
      if (cookie) {
        setCookie(event, AUTH_COOKIE_NAME, cookie, {
          maxAge: AUTH_COOKIE_MAX_AGE,
          secure: true,
          httpOnly: true,
          path: "/",
          sameSite: "lax"
        });
        event.node.res.statusCode = 201;
        return "";
      } else {
        log("error", "failed to mint a session cookie");
        event.node.res.statusCode = 401;
        return "";
      }
    }
  } else {
    log("debug", "deleting the session cookie");
    deleteCookie(event, AUTH_COOKIE_NAME);
    event.node.res.statusCode = 204;
  }
  return "";
});
const ID_TOKEN_MAX_AGE = 5 * 60;
const AUTH_COOKIE_MAX_AGE = 60 * 60 * 24 * 5 * 1e3;
const AUTH_COOKIE_NAME = "__session";
