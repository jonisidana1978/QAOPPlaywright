
const {POManager} = require('../pageobjects/POManager');
const { test, expect } = require('@playwright/test');
// JSON -> string -> JS object
const dataset = JSON.parse(JSON.stringify(require('../utils/placeorderTestData.json')));

for (const data of dataset) {
    test(`checking for parameter ${data.productNames}`, async ({ page }) => 
        {
        const poManager =new POManager(page);

      
        const productss = page.locator(".card-body");
        const cart =page.locator("[routerlink*='cart']")
        const loginPage = poManager.getLoginPage();
        await loginPage.goTO();
        //await loginPage.validLogin(dataSet.username,dataSet.password);
        await loginPage.validLogin(data.username,data.password);
        const dashboardPage = poManager.getDashboardPage();
        //await dashboardPage.searchProductAddCart(dataSet.productNames);
        await dashboardPage.searchProductAddCart(data.productNames);

        await dashboardPage.navigateToCart();
       // await page.locator("div li").first().waitFor();
      //  const bool = await page.locator("h3:has-text('ADIDAS ORIGINAL')").isVisible();
       // expect (bool).toBeTruthy();
        await page.locator("text=Checkout").click();
        await page.locator("input[type='text'].input.txt").nth(1).fill("123");

        const value = await page.locator("input[type='text'].input.txt").nth(1).inputValue();

        console.log(value);
    });
}

