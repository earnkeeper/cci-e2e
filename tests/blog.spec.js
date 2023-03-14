const { test, expect } = require("@playwright/test");
import { PlaywrightDevPage } from "./CCIURL..spec";

test("blog", async ({ page }) => {
  const playwrightDev = new PlaywrightDevPage(page)
  await playwrightDev.goto();
  
    await page.getByRole("heading", { name: "Latest Blog Posts" });
  
    //await page.pause();
  
    await expect(await page.getByText("Latest Blog Posts")).toBeDefined();
  });