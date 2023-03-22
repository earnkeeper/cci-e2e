const { test, expect } = require("@playwright/test");
import { PlaywrightDevPage } from "../CCIURL..spec";

test("logo-pic", async ({ page }) => {
    const playwrightDev = new PlaywrightDevPage(page);
    await playwrightDev.goto()

    await page.locator('.entry-content > .elementor > section').first()
    await expect(await page.locator('.entry-content > .elementor > section')).toBeDefined()
  });