import { fileURLToPath } from 'node:url'
import { expect, test } from '@nuxt/test-utils/playwright'

test.use({
  nuxt: {
    rootDir: fileURLToPath(new URL('./fixtures/i18n-micro', import.meta.url)),
  },
})

test('test docs', async ({ page, goto }) => {
  await goto('/', { waitUntil: 'domcontentloaded' })

  await expect(page.locator('.docs-link')).toHaveText('Open docs')

  await page.click(`.docs-link`)
  await expect(page).toHaveURL('/docs/')

  await expect(page.locator('[href="/docs/petstore-extended/info"] p')).toHaveText('Petstore Extended Api')

  await page.click(`[href="/docs/petstore-extended/info"]`)
  await expect(page).toHaveURL('/docs/petstore-extended/info')

  await expect(page.locator('.oapi-info-head h1')).toHaveText('Pet Store')

  await expect(page.locator('[href="/docs/petstore-extended/post/pet"] .oapi-menu-item__title .oapi-mono')).toHaveText('/pet')

  await page.click(`[href="/docs/petstore-extended/post/pet"]`)
  await expect(page).toHaveURL('/docs/petstore-extended/post/pet')

  await expect(page.locator('.oapi-route-header__description')).toHaveText('Add new pet to the store inventory.')
})

test('test locale docs', async ({ page, goto }) => {
  await goto('/', { waitUntil: 'domcontentloaded' })

  await goto('/de/docs/localization/info', { waitUntil: 'domcontentloaded' })

  await expect(page).toHaveURL('/de/docs/localization/info')

  await expect(page.locator('.oapi-info-head h1')).toHaveText('Tierhandlung')

  await expect(page.locator('[href="/de/docs/localization/post/pet"] .oapi-menu-description')).toHaveText('Fügen Sie dem Geschäft ein neues Haustier hinzu')

  await page.click(`[href="/de/docs/localization/post/pet"]`)
  await expect(page).toHaveURL('/de/docs/localization/post/pet')

  await expect(page.locator('.oapi-route-header__description')).toHaveText('Fügen Sie dem Ladeninventar ein neues Haustier hinzu.')
})
