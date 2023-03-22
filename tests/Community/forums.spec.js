const { test, expect } = require("@playwright/test");
import { PlaywrightDevPage } from "../CCIURL..spec";

test("forums", async ({ page }) => {
  const playwrightDev = new PlaywrightDevPage(page)
  await playwrightDev.goto();

    await page.getByRole('link', { name: 'Community ' }).click();
    await page.getByRole('heading', { name: 'Forums' })
    await page.getByRole('list').filter({ hasText: 'Public Forum This forums\'s content is visible to the public. 10 months, 3 weeks ' })
    await page. getByText('Public Forum')
    await page.getByRole('heading', { name: 'All Discussions' })
    await page.getByText('Viewing 1 of 1 forums')
    await page.getByRole('listitem').filter({ hasText: 'Madelyn Ellie Forum Amazing Discussion Shawn Hill replied 8 months, 3 weeks ago ' }).getByRole('link', { name: 'View Madelyn Ellie\'s profile' })
    await page.getByRole('listitem').filter({ hasText: 'Madelyn Ellie Forum Amazing Discussion Shawn Hill replied 8 months, 3 weeks ago ' }).getByRole('link', { name: 'Forum Amazing Discussion' })
    await page.getByText('Forum Amazing Discussion Shawn Hill replied 8 months, 3 weeks ago 7 Members · 8 ')
    await page.getByRole('listitem').filter({ hasText: 'Madelyn Ellie Forum Amazing Discussion Shawn Hill replied 8 months, 3 weeks ago ' }).getByRole('link', { name: 'Boarding' })
    await page.getByText('Viewing 1 of 1 forums')
    await page.getByText('1 2 3 →')

})
