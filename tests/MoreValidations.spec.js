const {test,expect}= require('@playwright/test')
const { only } = require('node:test');

test ('more validatiosn',async({page})=>
{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await expect(page.locator("#displayed-text")).toBeVisible();
    await page.locator("#hide-textbox").click();
    await expect(page.locator("displayed-text")).toBeHidden();
    
   page.pause();
    //page.on('dialog', dialog => dialog.accept());
      page.on('dialog', dialog => dialog.dismiss());
     await page.locator("#confirmbtn").click();
   //mouse hover
   await page.locator("#mousehover").hover();
   await page.locator("text=Top").click();
   await expect(page.locator("#mousehover")).toBeHidden();
    
   //handle frames and automate the same
   
   
   //await page.goBack();
    //await page.goForward();

});