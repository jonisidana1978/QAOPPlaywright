const {test, expect}= require ('@playwright/test');
const { only } = require('node:test');
//const {only}= require ('node:rtest');


test('browser context playwright test', async ({browser})=>

    {
    const context=await browser.newContext();
    const page =await context.newPage();
    
    const userName= page.locator('#username');
    const password = page.locator("[type='password']");
    const submitButton=page.locator ("#signInBtn")
   // const firstItem =page.locator("//a[normalize-space()='iphone X']");
   const cardTitle = page.locator(".card-body a");
   await page.locator(".card-body a").waitFor;

    
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const title = await page.title();
    console.log (title);
    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
    await userName.fill("");
    await userName.type("rahulshettyacademy");
    await password.fill("Learning@830$3mK2");
    await submitButton.click();
    const extract=await submitButton.textContent();
    console.log(extract);
    await page.waitForLoadState('networkidle');
    //await.page.locator("[style*='block']").wai
  //await expect (page.locator("[style*='block']")).toContainText ('Incorrect username/password.');
    //await expect(submitButton).toContainText ('Incorrect');

  
   console.log(await cardTitle.nth(1).textContent());

  //  console.log(await cardTitle.first().textContent());
    console.log (await cardTitle.allTextContents());


});
