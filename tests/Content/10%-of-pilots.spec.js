const { test, expect } = require("@playwright/test");
import { PlaywrightDevPage } from "../CCIURL..spec";

test("10% of pilots of pilots are in non-flying roles", async ({ page }) => {
    const playwrightDev = new PlaywrightDevPage(page , { timeout: 60000 })
    
    await page.getByText("10% of pilots of pilots are in non-flying roles");
  
    await page.waitForLoadState()
    await expect(await page.getByText("10% of pilots of pilots are in non-flying roles")).toBeDefined();
  });