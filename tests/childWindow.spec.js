const {test,expect} = require('@playwright/test');
const { execPath } = require('node:process');


test.only ('child window handle', async ({browser})=>

    {
    const context=await browser.newContext();
    const page =await context.newPage();
    

    const blinkingText= page.locator("[href*='documents-request']");
    const userName= page.locator('#username');
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  
    //switch from original to child page
    
    
    const page2 =context.waitForEvent('page');// listen for any new page opens
  //promise
    const [newPage]= await Promise.all([
    context.waitForEvent('page'),//listen for any new page pending, rejected  and fulfilled
    blinkingText.click(),
    ])

     const text = await newPage.locator(".red").textContent();
     console.log(text);
     const arrayText =text.split("@")
     const domain = arrayText[1].split(" ")[0]
     console.log(domain);
     await page.locator("#username").type(domain);
     await page.pause();
     console.log( await page.locator("#username").textContent());
    
    
    });
