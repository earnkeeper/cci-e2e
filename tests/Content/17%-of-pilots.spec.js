const { test, expect } = require("@playwright/test");
import { PlaywrightDevPage } from "../CCIURL..spec";

test("17% of pilots", async ({ page }) => {
    const playwrightDev = new PlaywrightDevPage(page);
    await playwrightDev.goto()
  
    await page.getByText("17% of pilots are furloughed");
  
    await page.pause();
  
    await expect(
      await page.getByText("17% of pilots are furloughed")).toBeVisible();
  });