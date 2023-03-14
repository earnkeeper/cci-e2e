const { test, expect } = require("@playwright/test");
import { PlaywrightDevPage } from "./CCIURL..spec";

test("name,email,send message", async ({ page }) => {
  const playwrightDev = new PlaywrightDevPage(page)
  await playwrightDev.goto();

  await page.getByText("Name Email Message Send Message");
  
    await expect(await page.getByText("Get in touch!")).toBeDefined();
  });
  