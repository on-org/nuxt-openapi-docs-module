import { describe, it, expect } from 'vitest'
import { fileURLToPath } from 'node:url'
import { setup } from './utils'
import {getText, renderPage, waitForURL} from "./helper";

describe('ssr', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('./fixtures/basic', import.meta.url)),
    browser: true
  })

  it('test docs', async () => {
    const { page } = await renderPage('/')

    expect(await getText(page, '.docs-link')).toEqual('Open docs')

    await page.click(`.docs-link`)
    await waitForURL(page, '/docs/')

    expect(await getText(page, '[href="/docs/petstore-extended/info"] p')).toEqual('Petstore Extended Api')

    await page.click(`[href="/docs/petstore-extended/info"]`)
    await waitForURL(page, '/docs/petstore-extended/info')

    expect(await getText(page, '.oapi-info-head h1')).toEqual('Pet Store')

    expect(await getText(page, '[href="/docs/petstore-extended/post/pet"] .oapi-menu-item__title .oapi-mono')).toEqual('/pet')

    await page.click(`[href="/docs/petstore-extended/post/pet"]`)

    await waitForURL(page, '/docs/petstore-extended/post/pet')

    expect(await getText(page, '.oapi-route-header__description')).toEqual('Add new pet to the store inventory.')
  })

  it('test locale docs', async () => {
    const { page } = await renderPage('/de/docs/localization/info')
    await waitForURL(page, '/de/docs/localization/info')

    expect(await getText(page, '.oapi-info-head h1')).toEqual('Tierhandlung')

    expect(await getText(page, '[href="/de/docs/localization/post/pet"] .oapi-menu-description')).toEqual('Fügen Sie dem Geschäft ein neues Haustier hinzu')

    await page.click(`[href="/de/docs/localization/post/pet"]`)

    await waitForURL(page, '/de/docs/localization/post/pet')

    expect(await getText(page, '.oapi-route-header__description')).toEqual('Fügen Sie dem Ladeninventar ein neues Haustier hinzu.')

  })
})
