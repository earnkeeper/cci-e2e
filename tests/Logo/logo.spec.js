const { test, expect } = require("@playwright/test");
import { PlaywrightDevPage } from "../CCIURL..spec";

test("logo", async ({ page }) => {
    const playwrightDev = new PlaywrightDevPage(page);
    await playwrightDev.goto()
  
    await page.getByRole('link', { name: 'Crews Climb International Logo 1080px' })
  
    
    await expect(page.getByRole('link', { name: 'Crews Climb International Logo 1080px' })).toBeVisible();
    

  });