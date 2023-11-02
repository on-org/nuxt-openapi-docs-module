
import { ModuleOptions } from './module'

declare module '@nuxt/schema' {
  interface NuxtConfig { ['openApiDocs']?: Partial<ModuleOptions> }
  interface NuxtOptions { ['openApiDocs']?: ModuleOptions }
}

declare module 'nuxt/schema' {
  interface NuxtConfig { ['openApiDocs']?: Partial<ModuleOptions> }
  interface NuxtOptions { ['openApiDocs']?: ModuleOptions }
}


export { ModuleOptions, default } from './module'
