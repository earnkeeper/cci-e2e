const { test, expect } = require("@playwright/test");
import { PlaywrightDevPage } from "./CCIURL..spec";

test("blog link", async ({ page }) => {
  const playwrightDev = new PlaywrightDevPage(page)
  await playwrightDev.goto();
  
    await page.getByRole("link", { name: "Blog" }).click();
    await page
              .getByRole('heading', { name: 'Recent Posts' })
              .getByRole('heading', { name: 'Preparation' }).getByRole('link', { name: 'Preparation' })
              .getByText('At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praese')
              .getByText('Dumisani Luthango 4 October 2020 0 Comments')
              .getByRole('link', { name: 'Permalink to Back to Work' })
              .getByText('Back to Work Sed ut perspiciatis unde omnis iste natus error sit voluptatem accu')
              
    await expect(page).toHaveURL("https://cci.gnarus.io/blog/");
  });