const { test, expect } = require("@playwright/test");
import { PlaywrightDevPage } from "./CCIURL..spec";

test("30% of pilots are unemployed", async ({ page }) => {
  const playwrightDev = new PlaywrightDevPage(page)
  await playwrightDev.goto();
  
    await page.getByText("30% of pilots are unemployed");
  
    await expect(page.getByText("30% of pilots are unemployed")).toBeVisible();
  });