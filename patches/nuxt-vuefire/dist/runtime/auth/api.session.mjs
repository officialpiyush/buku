import {
  readBody,
  setCookie,
  assertMethod,
  defineEventHandler,
  deleteCookie
} from "h3";
export default defineEventHandler(async (event) => {
  assertMethod(event, "POST");
  const { token } = await readBody(event);
  if (token) {
    setCookie(event, AUTH_COOKIE_NAME, token, {
      maxAge: AUTH_COOKIE_MAX_AGE,
      secure: true,
      httpOnly: true,
      path: "/",
      sameSite: "lax"
    });
  } else {
    deleteCookie(event, AUTH_COOKIE_NAME, {
      maxAge: -1
    });
  }
  event.node.res.statusCode = 204;
  return "";
});
const AUTH_COOKIE_MAX_AGE = 60 * 60 * 24 * 5 * 1e3;
const AUTH_COOKIE_NAME = "__session";
