import mitt from "mitt";
import OpenApiPlugin from "./OpenApiPlugin.mjs";
import enLang from "./locales/en.json";
const OpenApiPlugins = (ctx, inject) => {
  const emitter = mitt();
  const openapidoc = new OpenApiPlugin(ctx.i18n);
  openapidoc.addLocale(enLang);
  ctx.app.$openapidoc = openapidoc;
  ctx.app.$openapidocBus = {
    $on: emitter.on,
    $off: emitter.off,
    $emit: emitter.emit
  };
  inject("openapidoc", openapidoc);
  inject("openapidocBus", {
    $on: emitter.on,
    $off: emitter.off,
    $emit: emitter.emit
  });
};
export default OpenApiPlugins;
