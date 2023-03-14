const { test, expect } = require("@playwright/test");
import { PlaywrightDevPage } from "./CCIURL..spec";

test("get search link", async ({ page }) => {
  const playwrightDev = new PlaywrightDevPage(page)
  await playwrightDev.goto();
  
    await page.getByRole("link", { name: " " }).click();
    await page.getByPlaceholder("Search...");
    await page.getByRole("link", { name: "" });
  });