import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1727f85d = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _690b4e19 = () => interopDefault(import('../../.cache/docs.petstore_extended.vue' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/nuxt-openapi-docs-module/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _1727f85d,
    name: "index"
  }, {
    path: "/docs/petstore_extended/en/get/info",
    component: _690b4e19,
    meta: {"file":"petstore_extended","locale":"en","type":"get","path":"info"},
    name: "openapi-docs/petstore_extended/en-info"
  }, {
    path: "/docs/petstore_extended/en/get/components",
    component: _690b4e19,
    meta: {"file":"petstore_extended","locale":"en","type":"get","path":"components"},
    name: "openapi-docs/petstore_extended/en-components"
  }, {
    path: "/docs/petstore_extended/en/parameters/pet",
    component: _690b4e19,
    meta: {"file":"petstore_extended","locale":"en","type":"parameters","path":"pet"},
    name: "openapi-docs/petstore_extended/en-parameters=pet"
  }, {
    path: "/docs/petstore_extended/en/post/pet",
    component: _690b4e19,
    meta: {"file":"petstore_extended","locale":"en","type":"post","path":"pet"},
    name: "openapi-docs/petstore_extended/en-post=pet"
  }, {
    path: "/docs/petstore_extended/en/put/pet",
    component: _690b4e19,
    meta: {"file":"petstore_extended","locale":"en","type":"put","path":"pet"},
    name: "openapi-docs/petstore_extended/en-put=pet"
  }, {
    path: "/docs/petstore_extended/en/get/pet__petId_",
    component: _690b4e19,
    meta: {"file":"petstore_extended","locale":"en","type":"get","path":"pet__petId_"},
    name: "openapi-docs/petstore_extended/en-get=pet__petId_"
  }, {
    path: "/docs/petstore_extended/en/post/pet__petId_",
    component: _690b4e19,
    meta: {"file":"petstore_extended","locale":"en","type":"post","path":"pet__petId_"},
    name: "openapi-docs/petstore_extended/en-post=pet__petId_"
  }, {
    path: "/docs/petstore_extended/en/delete/pet__petId_",
    component: _690b4e19,
    meta: {"file":"petstore_extended","locale":"en","type":"delete","path":"pet__petId_"},
    name: "openapi-docs/petstore_extended/en-delete=pet__petId_"
  }, {
    path: "/docs/petstore_extended/en/post/pet__petId__uploadImage",
    component: _690b4e19,
    meta: {"file":"petstore_extended","locale":"en","type":"post","path":"pet__petId__uploadImage"},
    name: "openapi-docs/petstore_extended/en-post=pet__petId__uploadImage"
  }, {
    path: "/docs/petstore_extended/en/get/pet_findByStatus",
    component: _690b4e19,
    meta: {"file":"petstore_extended","locale":"en","type":"get","path":"pet_findByStatus"},
    name: "openapi-docs/petstore_extended/en-get=pet_findByStatus"
  }, {
    path: "/docs/petstore_extended/en/get/pet_findByTags",
    component: _690b4e19,
    meta: {"file":"petstore_extended","locale":"en","type":"get","path":"pet_findByTags"},
    name: "openapi-docs/petstore_extended/en-get=pet_findByTags"
  }, {
    path: "/docs/petstore_extended/en/get/store_inventory",
    component: _690b4e19,
    meta: {"file":"petstore_extended","locale":"en","type":"get","path":"store_inventory"},
    name: "openapi-docs/petstore_extended/en-get=store_inventory"
  }, {
    path: "/docs/petstore_extended/en/post/store_order",
    component: _690b4e19,
    meta: {"file":"petstore_extended","locale":"en","type":"post","path":"store_order"},
    name: "openapi-docs/petstore_extended/en-post=store_order"
  }, {
    path: "/docs/petstore_extended/en/get/store_order__orderId_",
    component: _690b4e19,
    meta: {"file":"petstore_extended","locale":"en","type":"get","path":"store_order__orderId_"},
    name: "openapi-docs/petstore_extended/en-get=store_order__orderId_"
  }, {
    path: "/docs/petstore_extended/en/delete/store_order__orderId_",
    component: _690b4e19,
    meta: {"file":"petstore_extended","locale":"en","type":"delete","path":"store_order__orderId_"},
    name: "openapi-docs/petstore_extended/en-delete=store_order__orderId_"
  }, {
    path: "/docs/petstore_extended/en/post/user",
    component: _690b4e19,
    meta: {"file":"petstore_extended","locale":"en","type":"post","path":"user"},
    name: "openapi-docs/petstore_extended/en-post=user"
  }, {
    path: "/docs/petstore_extended/en/get/user__username_",
    component: _690b4e19,
    meta: {"file":"petstore_extended","locale":"en","type":"get","path":"user__username_"},
    name: "openapi-docs/petstore_extended/en-get=user__username_"
  }, {
    path: "/docs/petstore_extended/en/put/user__username_",
    component: _690b4e19,
    meta: {"file":"petstore_extended","locale":"en","type":"put","path":"user__username_"},
    name: "openapi-docs/petstore_extended/en-put=user__username_"
  }, {
    path: "/docs/petstore_extended/en/delete/user__username_",
    component: _690b4e19,
    meta: {"file":"petstore_extended","locale":"en","type":"delete","path":"user__username_"},
    name: "openapi-docs/petstore_extended/en-delete=user__username_"
  }, {
    path: "/docs/petstore_extended/en/post/user_createWithArray",
    component: _690b4e19,
    meta: {"file":"petstore_extended","locale":"en","type":"post","path":"user_createWithArray"},
    name: "openapi-docs/petstore_extended/en-post=user_createWithArray"
  }, {
    path: "/docs/petstore_extended/en/post/user_createWithList",
    component: _690b4e19,
    meta: {"file":"petstore_extended","locale":"en","type":"post","path":"user_createWithList"},
    name: "openapi-docs/petstore_extended/en-post=user_createWithList"
  }, {
    path: "/docs/petstore_extended/en/get/user_login",
    component: _690b4e19,
    meta: {"file":"petstore_extended","locale":"en","type":"get","path":"user_login"},
    name: "openapi-docs/petstore_extended/en-get=user_login"
  }, {
    path: "/docs/petstore_extended/en/get/user_logout",
    component: _690b4e19,
    meta: {"file":"petstore_extended","locale":"en","type":"get","path":"user_logout"},
    name: "openapi-docs/petstore_extended/en-get=user_logout"
  }, {
    path: "/docs/petstore_extended/ru/get/info",
    component: _690b4e19,
    meta: {"file":"petstore_extended","locale":"ru","type":"get","path":"info"},
    name: "openapi-docs/petstore_extended/ru-info"
  }, {
    path: "/docs/petstore_extended/ru/get/components",
    component: _690b4e19,
    meta: {"file":"petstore_extended","locale":"ru","type":"get","path":"components"},
    name: "openapi-docs/petstore_extended/ru-components"
  }, {
    path: "/docs/petstore_extended/ru/parameters/pet",
    component: _690b4e19,
    meta: {"file":"petstore_extended","locale":"ru","type":"parameters","path":"pet"},
    name: "openapi-docs/petstore_extended/ru-parameters=pet"
  }, {
    path: "/docs/petstore_extended/ru/post/pet",
    component: _690b4e19,
    meta: {"file":"petstore_extended","locale":"ru","type":"post","path":"pet"},
    name: "openapi-docs/petstore_extended/ru-post=pet"
  }, {
    path: "/docs/petstore_extended/ru/put/pet",
    component: _690b4e19,
    meta: {"file":"petstore_extended","locale":"ru","type":"put","path":"pet"},
    name: "openapi-docs/petstore_extended/ru-put=pet"
  }, {
    path: "/docs/petstore_extended/ru/get/pet__petId_",
    component: _690b4e19,
    meta: {"file":"petstore_extended","locale":"ru","type":"get","path":"pet__petId_"},
    name: "openapi-docs/petstore_extended/ru-get=pet__petId_"
  }, {
    path: "/docs/petstore_extended/ru/post/pet__petId_",
    component: _690b4e19,
    meta: {"file":"petstore_extended","locale":"ru","type":"post","path":"pet__petId_"},
    name: "openapi-docs/petstore_extended/ru-post=pet__petId_"
  }, {
    path: "/docs/petstore_extended/ru/delete/pet__petId_",
    component: _690b4e19,
    meta: {"file":"petstore_extended","locale":"ru","type":"delete","path":"pet__petId_"},
    name: "openapi-docs/petstore_extended/ru-delete=pet__petId_"
  }, {
    path: "/docs/petstore_extended/ru/post/pet__petId__uploadImage",
    component: _690b4e19,
    meta: {"file":"petstore_extended","locale":"ru","type":"post","path":"pet__petId__uploadImage"},
    name: "openapi-docs/petstore_extended/ru-post=pet__petId__uploadImage"
  }, {
    path: "/docs/petstore_extended/ru/get/pet_findByStatus",
    component: _690b4e19,
    meta: {"file":"petstore_extended","locale":"ru","type":"get","path":"pet_findByStatus"},
    name: "openapi-docs/petstore_extended/ru-get=pet_findByStatus"
  }, {
    path: "/docs/petstore_extended/ru/get/pet_findByTags",
    component: _690b4e19,
    meta: {"file":"petstore_extended","locale":"ru","type":"get","path":"pet_findByTags"},
    name: "openapi-docs/petstore_extended/ru-get=pet_findByTags"
  }, {
    path: "/docs/petstore_extended/ru/get/store_inventory",
    component: _690b4e19,
    meta: {"file":"petstore_extended","locale":"ru","type":"get","path":"store_inventory"},
    name: "openapi-docs/petstore_extended/ru-get=store_inventory"
  }, {
    path: "/docs/petstore_extended/ru/post/store_order",
    component: _690b4e19,
    meta: {"file":"petstore_extended","locale":"ru","type":"post","path":"store_order"},
    name: "openapi-docs/petstore_extended/ru-post=store_order"
  }, {
    path: "/docs/petstore_extended/ru/get/store_order__orderId_",
    component: _690b4e19,
    meta: {"file":"petstore_extended","locale":"ru","type":"get","path":"store_order__orderId_"},
    name: "openapi-docs/petstore_extended/ru-get=store_order__orderId_"
  }, {
    path: "/docs/petstore_extended/ru/delete/store_order__orderId_",
    component: _690b4e19,
    meta: {"file":"petstore_extended","locale":"ru","type":"delete","path":"store_order__orderId_"},
    name: "openapi-docs/petstore_extended/ru-delete=store_order__orderId_"
  }, {
    path: "/docs/petstore_extended/ru/post/user",
    component: _690b4e19,
    meta: {"file":"petstore_extended","locale":"ru","type":"post","path":"user"},
    name: "openapi-docs/petstore_extended/ru-post=user"
  }, {
    path: "/docs/petstore_extended/ru/get/user__username_",
    component: _690b4e19,
    meta: {"file":"petstore_extended","locale":"ru","type":"get","path":"user__username_"},
    name: "openapi-docs/petstore_extended/ru-get=user__username_"
  }, {
    path: "/docs/petstore_extended/ru/put/user__username_",
    component: _690b4e19,
    meta: {"file":"petstore_extended","locale":"ru","type":"put","path":"user__username_"},
    name: "openapi-docs/petstore_extended/ru-put=user__username_"
  }, {
    path: "/docs/petstore_extended/ru/delete/user__username_",
    component: _690b4e19,
    meta: {"file":"petstore_extended","locale":"ru","type":"delete","path":"user__username_"},
    name: "openapi-docs/petstore_extended/ru-delete=user__username_"
  }, {
    path: "/docs/petstore_extended/ru/post/user_createWithArray",
    component: _690b4e19,
    meta: {"file":"petstore_extended","locale":"ru","type":"post","path":"user_createWithArray"},
    name: "openapi-docs/petstore_extended/ru-post=user_createWithArray"
  }, {
    path: "/docs/petstore_extended/ru/post/user_createWithList",
    component: _690b4e19,
    meta: {"file":"petstore_extended","locale":"ru","type":"post","path":"user_createWithList"},
    name: "openapi-docs/petstore_extended/ru-post=user_createWithList"
  }, {
    path: "/docs/petstore_extended/ru/get/user_login",
    component: _690b4e19,
    meta: {"file":"petstore_extended","locale":"ru","type":"get","path":"user_login"},
    name: "openapi-docs/petstore_extended/ru-get=user_login"
  }, {
    path: "/docs/petstore_extended/ru/get/user_logout",
    component: _690b4e19,
    meta: {"file":"petstore_extended","locale":"ru","type":"get","path":"user_logout"},
    name: "openapi-docs/petstore_extended/ru-get=user_logout"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
