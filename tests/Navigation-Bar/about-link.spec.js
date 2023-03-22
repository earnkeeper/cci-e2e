const { test, expect } = require("@playwright/test");
import { PlaywrightDevPage } from "../CCIURL..spec";

test("about link", async ({ page }) => {
    const playwrightDev = new PlaywrightDevPage(page);
    await playwrightDev.goto()
    
    await page.getByRole("link", { name: "About" }).click();
  
    await expect(page).toHaveURL("https://cci.gnarus.io/about/");
  });