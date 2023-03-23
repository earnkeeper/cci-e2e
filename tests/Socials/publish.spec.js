const { test, expect } = require("@playwright/test");
import { PlaywrightDevPage } from "../CCIURL..spec";

test("publish", async ({ page }) => {
    const playwrightDev = new PlaywrightDevPage(page);
    await playwrightDev.goto()
  
    await page.waitForLoadState();
    await page.getByRole("link", { name: "Back to Work" }).click();
    await page
      .getByRole("heading", { name: "Take Flight" })
      .getByRole("link", { name: "Take Flight" })
      .click();
    await page.getByRole("link", { name: "Permalink to Preparation" })
    await page.waitForLoadState();
    await page.getByRole("paragraph").filter({ hasText: "Publish" });

    expect
  });