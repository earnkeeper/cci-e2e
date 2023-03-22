const { test, expect } = require("@playwright/test");
import { PlaywrightDevPage } from "../CCIURL..spec";

test("newsfeed", async ({ page }) => {
    const playwrightDev = new PlaywrightDevPage(page);
    await playwrightDev.goto()

    await page.getByRole('link', { name: 'Community ' }).click();
    await page.getByRole('link', { name: 'News Feed' }).click();
    await page.getByRole('link', { name: 'Forum Amazing Discussion' })
    await page.getByRole('heading', { name: 'Recent Discussions' })
    await page.getByRole('heading', { name: 'Recent Discussions' })
    await page.getByRole('link', { name: 'Forum Sample Discussion' })
    await page.getByRole('link', { name: 'Forum Closed Discussion' })
    await page.getByRole('link', { name: 'Forum Amazing Discussion' })
    await page.getByText('Latest updates Dumisani Luthango posted an update a year ago Dumisani Luthango p')
    await page.getByText('Blog Preparation Back to Work Take Flight')
    await page.getByText('Who’s Online Online 0 There are no users currently online')
    await page.getByText('Groups Newest | Active | Popular Cockpit Addicts active 8 months ago Boarding ac')
    await page.getByRole('link', { name: 'See all ' })
    await page.getByText('Gavin Shaw became a registered member 3 months ago 3 months ago · 0 Comment Dumi')



})