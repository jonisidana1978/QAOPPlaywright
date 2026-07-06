const {test,expect} = require('@playwright/test');
const { execPath } = require('node:process');


test.only ('browser context playwright test', async ({browser})=>

    {
    const context=await browser.newContext();
    const page =await context.newPage();
    const register =page.locator('.text-reset');
    const fname =page.locator('#firstName');
    const lname =page.locator('#lastName');
    const email =page.locator('#userEmail');
    const phon  =page.locator('#userMobile');

    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
        //registering the new user
    await register.click();
    await fname.fill("pallav");
    await lname.fill("sidana");

    await email.fill("pallav@yahoo.com");
    const val = await email.inputValue();
        console.log(val);
   await expect (val).toBe("pallav@yahoo.com");

    await phon.fill("9090909090");
    const num=await phon.inputValue();
    console.log(num);
    await expect (num).toBe("9090909090");
   
});
