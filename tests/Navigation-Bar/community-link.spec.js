const { test, expect } = require("@playwright/test");
import { PlaywrightDevPage } from "../CCIURL..spec";

test("communitty", async ({ page }) => {
    const playwrightDev = new PlaywrightDevPage(page);
    await playwrightDev.goto()
    
    await page.getByRole('link', { name: 'Community ' }).click();
   
      
    await expect(page).toHaveURL("https://cci.gnarus.io/");
  });