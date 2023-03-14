const { test, expect } = require("@playwright/test");
import { PlaywrightDevPage } from "./CCIURL..spec";

test("get in touch", async ({ page }) => {
  const playwrightDev = new PlaywrightDevPage(page)
  await playwrightDev.goto();
  
    await page.getByRole("heading", { name: "Get in touch!" });
  
    await expect(await page.getByText("Get in touch!")).toBeVisible();
  });