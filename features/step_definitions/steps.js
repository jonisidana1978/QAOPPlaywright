const { When, Then, Given, setDefaultTimeout } = require('@cucumber/cucumber');
const { POManager } = require('../../pageobjects/POManager');
const { expect } = require('@playwright/test');
const { chromium } = require('playwright');

//setDefaultTimeout(60 * 1000);

Given('a login to the Ecommerce application with {string} and  {string}', { timeout: 100 * 1000 }, async function (username, password) {
  const loginPage = this.poManager.getLoginPage();
  await loginPage.goTO();
  await loginPage.validLogin(username, password);
});

Then('Add {string} to Cart', async function (productName) {
  this.dashboardPage = this.poManager.getDashboardPage();
  await this.dashboardPage.searchProductAddCart(productName);
  await this.dashboardPage.navigateToCart();
});

