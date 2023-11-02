import { computed, shallowReactive, shallowRef, useState, useRoute } from '#imports'

export interface ParsedOpenApiMeta {
    [key: string]: any
}

interface ParsedOpenApi extends ParsedOpenApiMeta {
    /**
     * Excerpt
     */
    excerpt?: any
    /**
     * Content body
     */
    body: any
}


export const useOpenApiDataState = () => {
    /**
     * Map of loaded pages.
     */
    const data = useState<Record<string, ParsedOpenApi>>('oa-data', () => shallowRef(shallowReactive({})))

    return {
        data
    }
}
