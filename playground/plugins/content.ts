import {defineNuxtPlugin, useNuxtApp} from "#imports";

export default defineNuxtPlugin(nuxtApp => {
  const { $openapidoc } = useNuxtApp()
  $openapidoc.setAccess((file) => {
    return file !== 'no-access';
  })

  $openapidoc.setRouteInfo((file, url, method) => {
    if(file === 'petstore_extended' && url === 'pet') {
      return "<b>your APIKEY:</b> aaaaaaaa";
    }
    return null;
  })
});
