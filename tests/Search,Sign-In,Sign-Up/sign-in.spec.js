const { test, expect } = require("@playwright/test");
import { PlaywrightDevPage } from "../CCIURL..spec";

test('sign in', async ({ page }) => {
    const playwrightDev = new PlaywrightDevPage(page)
    await playwrightDev.goto();
    
  
    await page.getByRole('link', { name: 'Sign in' }).click();
    await page.getByRole('link', { name: 'Crews Climb International' })
    await page.getByRole('heading', { name: 'Sign in' })
    await page.getByRole('link', { name: 'Create an Account' })
    await page.getByRole('link', { name: 'Create an Account' })
    await page.getByPlaceholder('Password')
    await page.getByRole('button', { name: 'Show password' })
    await page.getByText('Remember Me')
    await page.getByLabel('Remember Me')
    await page.getByRole('link', { name: 'Forgot Password?' })
    await page.getByRole('button', { name: 'Log In' })
  
    await expect(await page.getByText("Sign in")).toBeVisible();
  });