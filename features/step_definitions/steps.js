const {When,Then,Given} = require('@cucumber/cucumber');
const { POManager } = require('../..pageobjects/POManager');
const {test, expect,playwright}= require ('@playwright/test');


Given('alogin to the Ecommerce application with {username} and  {password}', async function (username, password) {
  // Write code here that turns the phrase above into concrete actions
    const browser = await playwright.chromium.launch();
    const context=await browser.newContext();
    const page =await context.newPage();
    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();
    await loginPage.goTO();
    await loginPage.validLogin(data.username, data.password);
});



When('Add {string} to Cart', function (string) {
  // Write code here that turns the phrase above into concrete actions
  const dashboardPage = poManager.getDashboardPage();
        await dashboardPage.searchProductAddCart(data.productNames);
        await dashboardPage.navigateToCart();
});
