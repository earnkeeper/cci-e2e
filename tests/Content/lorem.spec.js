const { test, expect } = require("@playwright/test");
import { PlaywrightDevPage } from "../CCIURL..spec";

test("communitty", async ({ page }) => {
    const playwrightDev = new PlaywrightDevPage(page);
    await playwrightDev.goto()

    await page.getByText(' 5/5 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellu')

    await expect(await page.getByText(' 5/5 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellu')).toBeVisible()
  });
    
