const { test, expect } = require("@playwright/test");
import { PlaywrightDevPage } from "../CCIURL..spec";

test("communitty", async ({ page }) => {
    const playwrightDev = new PlaywrightDevPage(page);
    await playwrightDev.goto()

    await page.getByRole('link', { name: 'info@crewsclimb.com' }).click();
    await page.locator('section').filter({ hasText: 'info@crewsclimb.com Facebook Linkedin Instagram info@crewsclimb.com' }).getByRole('img', { name: 'Crews Climb International Logo 1080px' })
    await page.getByText('Facebook Linkedin Instagram')


    await expect(page).toHaveURL("https://cci.gnarus.io/");  

})
