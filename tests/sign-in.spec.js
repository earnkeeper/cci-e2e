const { test, expect } = require("@playwright/test");
import { PlaywrightDevPage } from "./CCIURL..spec";

test('sign in', async ({ page }) => {
    const playwrightDev = new PlaywrightDevPage(page)
    await playwrightDev.goto();
    
  
    //await page.getByRole('link', { name: 'Sign in' }).click();
    await page.getByRole('heading', { name: 'Sign in' })
    //await page.getByRole('link', { name: 'Create an Account' })
  
    await expect(await page.getByText("Sign in")).toBeVisible();
  });