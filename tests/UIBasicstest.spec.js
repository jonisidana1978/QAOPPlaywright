const {test, expect} = require ('@playwright/test');
const { only } = require('node:test');
//test('First Playwright test',async function()
//annomous function
//Playwright fixtures are isolated, reusable code blocks that 
// automatically manage the setup and teardown environment for
//  your test cases
test.only ('browser context playwright test', async ({browser})=>

    {
       //create a context here
    //playwright code you need to right in this
        //chrome-Plugins/cookies
    const context=await browser.newContext();// this will create new browser instance
    const page =await context.newPage();//which will create new page for automation
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const title = await page.title();
    console.log (title);
    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
 //   await page.locator([input]='username').fill;

});

//test 

test ('first playwright test', async ({page})=>

    {
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    //title
    await page.title


});
//only test will run this test case in case u 
   /// have multiple test//
test('onlytest', async({page})=>
{
await page.goto("https://www.yahoo.com/");
});
