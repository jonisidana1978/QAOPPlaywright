const {test,expect}= require('@playwright/test');

test.only("screenshot and visual comparission",async({page})=>{

await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
await expect (page.locator("#displayed-text")).toBeVisible();
await page.locator('#displayed-text').screenshot({path:'partialscreenshot.png'});

await page.locator("#hide-textbox").click();
//screen shot capture for whole page
await page.screenshot({path:'screenshot.png'});

//only show th epartiall screen 

await expect (page.locator("#displayed-text")).toBeHidden();
});

//visual screen testing 
test("visual screen", async ({page})=>
{
    await page.goto("http://google.com");
    expect (await page.screenshot()).toMatchSnapshot('landing.png');





});