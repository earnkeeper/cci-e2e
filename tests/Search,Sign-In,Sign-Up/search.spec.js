const { test, expect } = require("@playwright/test");
import { PlaywrightDevPage } from "../CCIURL..spec";

test("search", async ({ page }) => {
    const playwrightDev = new PlaywrightDevPage(page);
    await playwrightDev.goto()

    await page.getByRole('link', { name: ' Search' }).click();
    await page.getByPlaceholder('Search...')
    await page.getByRole('link', { name: '' })

    await expect(page).toHaveURL('https://cci.gnarus.io/');

});