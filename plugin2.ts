import {OpenApiDocsOptions} from "./index";
import { defineNuxtPlugin, useRuntimeConfig } from '#imports';
declare module '#app' {
  interface NuxtAppOptions {
    $openapidoc: OpenApiDocsOptions
    $openapidoc_files: string[]
    $openapidoc_simples: Record<string, any>
  }
}
export default defineNuxtPlugin((nuxtApp) => {
  const options: OpenApiDocsOptions = nuxtApp.$config
  console.log(333, options)
  // console.log(1111, options)
  // console.log(111, nuxtApp.$config)

  // const openapi_files = options.files
  // const openapidoc_simples = options.params

  // Добавляем свойство $openapidoc в контекст Vue.js
  // nuxtApp.$openapidoc = options
  // nuxtApp.$openapidoc_files = openapi_files
  // nuxtApp.$openapidoc_simples = openapidoc_simples
})
