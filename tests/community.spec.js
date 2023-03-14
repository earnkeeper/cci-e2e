const { test, expect } = require("@playwright/test");
import { PlaywrightDevPage } from "./CCIURL..spec";

test("community", async ({ page }) => {
  const playwrightDev = new PlaywrightDevPage(page)
  await playwrightDev.goto();
    await page.getByRole('link', { name: 'Community ' }).click();
    await page.getByRole('link', { name: 'News Feed' }).click();
    await page.getByRole('link', { name: 'Forum Sample Discussion' });
    await page
     .getByRole('link', { name: 'Newest' })
     .getByRole('link', { name: 'Active' })
     .getByRole('link', { name: 'Popular' })
     .getByRole('heading', { name: 'Latest updates' })
     .getByRole('heading', { name: 'Blog' })
     .getByRole('heading', { name: 'Who’s Online' })
     .getByRole('heading', { name: 'Groups' })
    
    await page.getByRole('link', { name: 'See all ' }).click();
    await page.waitForLoadState();
    await page
    .getByRole('link', { name: 'Cockpit Addicts', exact: true })
    .getByRole('link', { name: 'Group logo of Cockpit Addicts' })
    
   // await page.getByRole("link", { name: "Community" }).dblclick();
  
    await expect(page).toHaveURL("https://cci.gnarus.io/groups/");
  });