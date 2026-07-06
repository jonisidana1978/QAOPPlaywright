//static and dynamic drop dorn
const {test, expect}= require ('@playwright/test');
const { only } = require('node:test');
//const {only}= require ('node:rtest');


test.only ('browser context playwright test', async ({browser})=>

    {
    const context=await browser.newContext();
    const page =await context.newPage();
    const userName= page.locator('#username');
    const password = page.locator("[type='password']");
    const submitButton=page.locator ("#signInBtn")
    const radio= await page.locator(".radiotextsty");
    const pop = await page.locator("#okayBtn");
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const title = await page.title();
    console.log (title);
    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
    await userName.fill("");
    await userName.type("rahulshettyacademy");
    await password.fill("Learning@830$3mK2");
    await radio.last().click();
     await pop.click();
    //await expac   

    
    
    //await dropDown.selectOption("consult");

    //await page.pause(5000);
    //await submitButton.click();
    

});
