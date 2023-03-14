const { test, expect } = require("@playwright/test");
import { PlaywrightDevPage } from "./CCIURL..spec";

test('search', async ({ page }) => {
    await page.waitForLoadState();
    await page.goto('https://cci.gnarus.io/forums/');
    
    await page.getByPlaceholder('Search forums...').click()
    await page.waitForLoadState();
    await page.getByRole('textbox').fill('example value');
    await page.getByRole('textbox').clear();
    
    await expect(page).toHaveURL('https://cci.gnarus.io/forums/');
  });