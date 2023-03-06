const { test, expect } = require("@playwright/test");

test("logo", async ({ page }) => {
  await page.waitForLoadState()
  await page.goto('https://cci.gnarus.io/', { timeout: 60000 });

  await page.getByRole('link', { name: 'Crews Climb International Logo 1080px' })

  
  await expect(page.getByRole('link', { name: 'Crews Climb International Logo 1080px' })).toBeVisible();
  
});

test("about link", async ({ page }) => {
  await page.goto("https://cci.gnarus.io/");

  await page.getByRole("link", { name: "About" }).click();

  await expect(page).toHaveURL("https://cci.gnarus.io/about/");
});

test("home", async ({ page }) => {
  await page.goto("https://cci.gnarus.io/");

  await page.getByRole("link", { name: "home" }).click();

  await expect(page).toHaveURL("https://cci.gnarus.io/");
});


test("courses", async ({ page }) => {
  await page.goto("https://cci.gnarus.io/");
  await page.waitForLoadState();
  await page.getByRole("link", { name: "Courses" }).click();

  await expect(page).toHaveURL("https://cci.gnarus.io/courses/");
});

test("community", async ({ page }) => {
  await page.goto("https://cci.gnarus.io/");
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

test('forums', async ({ page }) => {
  await page.goto('https://cci.gnarus.io/forums/', { timeout: 60000 });
  await page.getByRole('heading', { name: 'Forums' })
  await page.getByText('Public Forum').click();
  await page.getByRole('heading', { name: 'All Discussions' })
  await page.locator('#bbp-forum-67 div').filter({ hasText: 'Alex Griffin Forum Example Discussion Alex Griffin replied 10 months ago 1 Membe' }).first()
  await page.locator('#bbp-forum-67 div').filter({ hasText: 'Jessica Sanders Forum Sample Discussion Jessica Sanders replied 10 months ago 1 ' }).first()
  await page.getByRole('link', { name: 'info@crewsclimb.com' })

  await expect(page).toHaveURL('https://cci.gnarus.io/forums/forum/public-forum/');
});

test('search', async ({ page }) => {
  await page.waitForLoadState();
  await page.goto('https://cci.gnarus.io/forums/');
  
  await page.getByPlaceholder('Search forums...').click()
  await page.waitForLoadState();
  await page.getByRole('textbox').fill('example value');
  await page.getByRole('textbox').clear();
  
  await expect(page).toHaveURL('https://cci.gnarus.io/forums/');
});


test('Test ',async ({page})=>{

  await page.goto('https://cci.gnarus.io/groups/')
  const elements = await page.locator('#groups-list').all()

  for(const element in elements){

    const title = await page.locator('.list-title.groups-title')

    expect(title).toBeDefined()

    const imageContainer = await page.locator('.bs-group-cover.only-grid-view.cover-small')

    expect(imageContainer).toBeDefined()
    

  }
})

test("blog link", async ({ page }) => {
  await page.goto("https://cci.gnarus.io/");

  await page.getByRole("link", { name: "Blog" }).click();
  await page
            .getByRole('heading', { name: 'Recent Posts' })
            .getByRole('heading', { name: 'Preparation' }).getByRole('link', { name: 'Preparation' })
            .getByText('At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praese')
            .getByText('Dumisani Luthango 4 October 2020 0 Comments')
            .getByRole('link', { name: 'Permalink to Back to Work' })
            .getByText('Back to Work Sed ut perspiciatis unde omnis iste natus error sit voluptatem accu')
  await page.locator('a').filter({ hasText: 'Facebook' })
            .locator('a').filter({ hasText: 'Linkedin' })
            .locator('a').filter({ hasText: 'Instagram' })
        
  await expect(page).toHaveURL("https://cci.gnarus.io/blog/");
});

test("get search link", async ({ page }) => {
  await page.goto("https://cci.gnarus.io/");
  await page.https

  await page.getByRole("link", { name: " " }).click();
  await page.getByPlaceholder("Search...");
  await page.getByRole("link", { name: "" });
});

test('sign in', async ({ page }) => {
  await page.goto("https://cci.gnarus.io/");

  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByRole('heading', { name: 'Sign in' })
  await page.getByRole('link', { name: 'Create an Account' })

  await expect(await page.getByText("Sign in")).toBeDefined();
});

test("Value Proposition Here", async ({ page }) => {
  await page.goto("https://cci.gnarus.io/");

  await page.getByText("Value Proposition Here");

  await expect(await page.getByText("Value proposition here")).toBeDefined();
});

test("30% of pilots are unemployed", async ({ page }) => {
  await page.goto("https://cci.gnarus.io/", { timeout: 60000 });

  await page.getByText("30% of pilots are unemployed");

  await expect(page.getByText("30% of pilots are unemployed")).toBeVisible();
});

test("17% of pilots are furloughed", async ({ page }) => {
  await page.goto("https://cci.gnarus.io/");

  await page.getByText("17% of pilots are furloughed");

  await page.pause();

  await expect(
    await page.getByText("17% of pilots are furloughed")
  ).toBeVisible();
});

test("10% of pilots of pilots are in non-flying roles", async ({ page }) => {
  await page.goto("https://cci.gnarus.io/");

  await page.getByText("10% of pilots of pilots are in non-flying roles");

  await page.waitForLoadState()
  await expect(await page.getByText("10% of pilots of pilots are in non-flying roles")).toBeDefined();
});

test("blog", async ({ page }) => {
  await page.goto("https://cci.gnarus.io/");

  await page.getByRole("heading", { name: "Latest Blog Posts" });

  //await page.pause();

  await expect(await page.getByText("Latest Blog Posts")).toBeDefined();
});

test("text", async ({ page }) => {
  await page.goto("https://cci.gnarus.io/");

  await page.getByText("This course illuminated to me that, even at my lates stage in the aviation game,");

  await expect(await page.getByText("This course illuminated to me that, even at my lates stage in the aviation game,")  ).toBeVisible();

});
//pics with links below latest blog posts still need to be done

test("Preparation", async ({ page }) => {
  await page.goto("https://cci.gnarus.io/", { timeout: 60000 });

  await page.getByRole("link", { name: "Preparation" }).click();

  await expect(page).toHaveURL("https://cci.gnarus.io/preparation/");
});

test("get in touch", async ({ page }) => {
  await page.goto("https://cci.gnarus.io/");

  await page.getByRole("heading", { name: "Get in touch!" });

  await expect(await page.getByText("Get in touch!")).toBeVisible();
});

test("name,email,send message", async ({ page }) => {
  await page.goto("https://cci.gnarus.io/", { timeout: 60000 });
  await page.waitForLoadState();
  await page.getByText("Name Email Message Send Message");

  await expect(await page.getByText("Get in touch!")).toBeDefined();
});

test("publish", async ({ page }) => {
  await page.goto("https://cci.gnarus.io/");
  await page.waitForLoadState();
  await page.getByRole("link", { name: "Back to Work" }).click();
  await page
    .getByRole("heading", { name: "Take Flight" })
    .getByRole("link", { name: "Take Flight" })
    .click();
  await page.getByRole("link", { name: "Permalink to Preparation" })
  await page.waitForLoadState();
  await page.getByRole("paragraph").filter({ hasText: "Publish" });
});

test('socials',async ({ page}) => {
  await page.goto('https://cci.gnarus.io/forums/')
  await page.locator('section').filter({ hasText: 'info@crewsclimb.com Facebook Linkedin Instagram info@crewsclimb.com' }).getByRole('img', { name: 'Crews Climb International Logo 1080px' })
  await page.locator('a').filter({ hasText: 'Facebook' })
  await page.locator('a').filter({ hasText: 'Linkedin' })
  await page.locator('a').filter({ hasText: 'Instagram' })
  
  

})
