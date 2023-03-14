const { test, expect } = require("@playwright/test");
import { PlaywrightDevPage } from "./CCIURL..spec";

test('forums', async ({ page }) => {
  const playwrightDev = new PlaywrightDevPage(page)
  await playwrightDev.goto();

  await page.getByRole('link', { name: 'Community ' }).click();
  await page.getByRole('link', { name: 'Forums' }).click()
    await page.getByRole('heading', { name: 'Forums' })
    await page.getByText('Public Forum').click();
    await page.getByRole('heading', { name: 'All Discussions' })
    await page.locator('#bbp-forum-67 div').filter({ hasText: 'Alex Griffin Forum Example Discussion Alex Griffin replied 10 months ago 1 Membe' }).first()
    await page.locator('#bbp-forum-67 div').filter({ hasText: 'Jessica Sanders Forum Sample Discussion Jessica Sanders replied 10 months ago 1 ' }).first()
    await page.getByRole('link', { name: 'info@crewsclimb.com' })
  
    await expect(page).toHaveURL('https://cci.gnarus.io/forums/forum/public-forum/');
  });