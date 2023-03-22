const { test, expect } = require("@playwright/test");
import { PlaywrightDevPage } from "../CCIURL..spec";

test('courses', async ({ page }) => {
    const playwrightDev = new PlaywrightDevPage(page)
    await playwrightDev.goto();
    
    await page.getByRole('link', { name: 'Courses' }).click()

    
    await page.waitForLoadState()
    await expect(page).toHaveURL('https://cci.gnarus.io/courses/', {timeout: 60000})
   
  });