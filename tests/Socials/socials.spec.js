const { test, expect } = require("@playwright/test");
import { PlaywrightDevPage } from "../CCIURL..spec";

test('socials',async ({ page}) => {
    test.setTimeout(120000);
    const playwrightDev = new PlaywrightDevPage(page , { timeout: 60000 })
    await playwrightDev.goto()
    
    
    page.locator('section').filter({ hasText: 'info@crewsclimb.com Facebook Linkedin Instagram info@crewsclimb.com' }).getByRole('img', { name: 'Crews Climb International Logo 1080px' })
    page.locator('a').filter({ hasText: 'Facebook' })
    page.locator('a').filter({ hasText: 'Linkedin' })
    page.locator('a').filter({ hasText: 'Instagram' })

 await expect(page).toHaveURL("https://cci.gnarus.io/");  
    
 })
  