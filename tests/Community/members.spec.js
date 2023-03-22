const { test, expect } = require("@playwright/test");
import { PlaywrightDevPage } from "../CCIURL..spec";

test("communitty", async ({ page }) => {
    const playwrightDev = new PlaywrightDevPage(page);
    await playwrightDev.goto()

    await page.getByRole('link', { name: 'Community ' }).click();
    await page.getByRole('heading', { name: 'Members' })
    await page.getByRole('link', { name: 'All Members 18' })
    await page.getByRole('combobox', { name: ' Order By:' })
    await page. getByRole('navigation', { name: 'Directory menu' }).getByRole('list')
    await page.getByRole('link', { name: '\\a \\9 \\9 \\9 \\9 \\9 \\9 \\9 \\9 \\9 \\9 \\9 \\9 \\9 \\9 \\9 \\9 \\9 \\9 Grid View\\9 \\9' })
    await page. getByRole('link', { name: '\\a \\9 \\9 \\9 \\9 \\9 \\9 \\9 \\9 \\9 \\9 \\9 \\9 \\9 \\9 \\9 \\9 \\9 \\9 List View\\9 \\9' })
})
    
        