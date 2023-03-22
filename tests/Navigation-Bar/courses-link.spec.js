const { test, expect } = require("@playwright/test");
import { PlaywrightDevPage } from "../CCIURL..spec";

test("courses-link", async ({ page }) => {
  const playwrightDev = new PlaywrightDevPage(page)
    await playwrightDev.goto();  

    await page.waitForLoadState();
    await page.getByRole("link", { name: "Courses" })
  
    expect(page.getByRole("link", { name: "Courses" })).toBeDefined()
  });