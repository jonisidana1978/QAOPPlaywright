const {test, expect}= require ('@playwright/test');
//const {only}= require ('node:rtest');
const {allure} = require('allure-playwright');

test ('browser context playwright test', async ({browser})=>

    {
    const context=await browser.newContext();
    const page =await context.newPage();
  //   const screenshot = await page.screenshot();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const title = await page.title();
    console.log (title);
    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
    await page.locator("//input[@id='username']").fill("rahulshettyacademy ");
    await page.locator("[type='password']").fill("Learning@830$3mK2)");
    await page.locator ("#signInBtn").click();
    const extract=await page.locator("[style*='block']").textContent();
    console.log(extract);
  //  await expect (page.locator("[style*='block']")).toContainText ('Incorrect username/password.');
    await expect(page.locator("[style*='block']")).toContainText ('Incorrect');

//


});