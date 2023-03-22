const { test, expect } = require("@playwright/test");
import { PlaywrightDevPage } from "../CCIURL..spec";

test("about page", async ({ page }) => {
    const playwrightDev = new PlaywrightDevPage(page);
    await playwrightDev.goto()

  await page.getByRole('link', { name: 'About' }).click();
  await page.getByRole('heading', { name: 'Our Mission' })
  await page.getByText('Crews Climb International has a clear ‘why’ from which it will drive the next 2-')
  await page.getByText('“To inspire and empower airline crew globally to utilise and grow their existing')
  await page.locator('section:nth-child(5) > .elementor-container > .elementor-column > .elementor-widget-wrap')
  await page.getByTitle('Page 8').locator('div').nth(2)
  await page.locator('div').filter({ hasText: 'Christen Killick Business Strategy & Governance' }).first()
  await page.getByText('Name Email Message Send Message')
  await page.getByRole('button', { name: 'Send Message' })
  await page.getByRole('heading', { name: 'Our Mission' })
    page.getByRole('heading', { name: 'Our Team' })
  

  await expect(page).toHaveURL("https://cci.gnarus.io/about/");
});
