const { test, expect } = require("@playwright/test");
import { PlaywrightDevPage } from "./CCIURL..spec";

test("text", async ({ page }) => {
  test.setTimeout(45000);
  const playwrightDev = new PlaywrightDevPage(page , { timeout: 60000 })
  await playwrightDev.goto();
  
    await page.getByText("This course illuminated to me that, even at my lates stage in the aviation game,");
  
    await expect(await page.getByText("This course illuminated to me that, even at my lates stage in the aviation game,")).toBeDefined();
  
  });