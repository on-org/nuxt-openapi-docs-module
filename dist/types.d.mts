
import type { ModuleOptions } from './module.js'


declare module '@nuxt/schema' {
  interface NuxtConfig { ['openApiDocs']?: Partial<ModuleOptions> }
  interface NuxtOptions { ['openApiDocs']?: ModuleOptions }
}

declare module 'nuxt/schema' {
  interface NuxtConfig { ['openApiDocs']?: Partial<ModuleOptions> }
  interface NuxtOptions { ['openApiDocs']?: ModuleOptions }
}


export type { ModuleOptions, default } from './module.js'
