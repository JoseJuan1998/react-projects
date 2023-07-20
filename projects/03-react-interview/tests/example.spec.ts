import { test, expect } from '@playwright/test'

test('app show random fact and image', async ({ page }) => {
  await page.goto('/')

  const header = await page.getByRole('heading')
  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const headerTextContent = await header.textContent()
  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Cats App/)
  await expect(headerTextContent).toContain('Cats App')
  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith(process.env.VITE_BASE_IMAGES_URL ?? '')).toBeTruthy()
})
