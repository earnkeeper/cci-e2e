const { test, expect } = require("@playwright/test");
import { PlaywrightDevPage } from "./CCIURL..spec";


test.only("17% of pilots are furloughed", async ({ page }) => {
  const playwrightDev = new PlaywrightDevPage(page , { timeout : 60000})
  await playwrightDev.goto();
  
    await page.getByText("17% of pilots are furloughed");
  
    await page.pause();
  
    await expect(
      await page.getByText("17% of pilots are furloughed")).toBeVisible();
  });