const { test, expect } = require("@playwright/test");
import { PlaywrightDevPage } from "./CCIURL..spec";

test("Value Proposition Here", async ({ page }) => {
  test.setTimeout(45000);
  const playwrightDev = new PlaywrightDevPage(page)
  await playwrightDev.goto();
  
  
    await page.getByText("Value Proposition Here");
  
    await expect(await page.getByText("Value proposition here")).toBeDefined();
  });
    