export function log(...args) {
  const [typeOrLog, ...rest] = args;
  if (isLogType(typeOrLog)) {
    console[typeOrLog]("[nuxt-vuefire]:", ...rest);
  } else {
    console.log("[nuxt-vuefire]:", ...args);
  }
}
function isLogType(logType) {
  return logType === "debug" || logType === "info" || logType === "warn" || logType === "error" || logType === "trace";
}
