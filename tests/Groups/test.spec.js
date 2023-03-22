const { test, expect } = require("@playwright/test");
import { PlaywrightDevPage } from "../CCIURL..spec";

test('Test ',async ({page})=>{

  const playwrightDev = new PlaywrightDevPage(page)
  await playwrightDev.goto();
    const elements = await page.locator('#groups-list').all()
  
    for(const element in elements){
  
      const title = await page.locator('.list-title.groups-title')
  
      expect(title).toBeDefined()
  
      const imageContainer = await page.locator('.bs-group-cover.only-grid-view.cover-small')
  
      expect(imageContainer).toBeDefined()
      
  
    }
  })