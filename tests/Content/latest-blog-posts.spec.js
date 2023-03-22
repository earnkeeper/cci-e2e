const { test, expect } = require("@playwright/test");
import { PlaywrightDevPage } from "./CCIURL..spec";

test("blog Posts", async ({ page }) => {
    test.setTimeout(45000);
    const playwrightDev = new PlaywrightDevPage(page)
    await playwrightDev.goto();

    page.getByRole('heading', { name: 'Latest Blog Posts' })
    page.getByRole('link', { name: 'Preparation' })
    page.getByRole('link', { name: 'Back to Work' })
    page.getByRole('link', { name: 'Take Flight' })
    page.locator('#post-506').getByRole('article').filter({ hasText: 'Preparation 4 October 2020 No Comments At vero eos et accusamus et iusto odio di' })
    page.locator('#post-506').getByRole('article').filter({ hasText: 'Back to Work 4 June 2020 No Comments Sed ut perspiciatis unde omnis iste natus e' })
    page.locator('#post-506').getByRole('article').filter({ hasText: 'Take Flight 4 March 2020 No Comments Lorem ipsum dolor sit amet, consectetur adi' })

    expect(page.getByRole('heading', { name: 'Latest Blog Posts' })).toBeDefined();
    

})
    
