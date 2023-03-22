const { test, expect } = require("@playwright/test");
import { PlaywrightDevPage } from "../CCIURL..spec";

test("communitty", async ({ page }) => {
    const playwrightDev = new PlaywrightDevPage(page);
    await playwrightDev.goto()

    await page.getByRole('link', { name: 'Community ' }).click();
    await page.getByRole('heading', { name: 'Groups' })
    await page.getByRole('link', { name: '\\a \\9 \\9 \\9 \\9 \\9 \\9 \\9 \\9 \\9 \\9 \\9 \\9 \\9 \\9 \\9 \\9 \\9 \\9 List View\\9 \\9' })
    await page.getByPlaceholder('Search Groups…')
    await page.getByRole('combobox', { name: ' Order By:' })
    await page.getByRole('link', { name: '\\a \\9 \\9 \\9 \\9 \\9 \\9 \\9 \\9 \\9 \\9 \\9 \\9 \\9 \\9 \\9 \\9 \\9 \\9 Grid View\\9 \\9' })
    await page.getByRole('link', { name: '\\a \\9 \\9 \\9 \\9 \\9 \\9 \\9 \\9 \\9 \\9 \\9 \\9 \\9 \\9 \\9 \\9 \\9 \\9 List View\\9 \\9' })


 await expect(page).toHaveURL("https://cci.gnarus.io/");
})    