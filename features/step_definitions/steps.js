const {When,Then,Given} = require('@cucumber/cucumber');
const { POManager } = require('../../pageobjects/POManager');
const { expect } = require('@playwright/test');
const { chromium } = require('playwright');

Given('alogin to the Ecommerce application with {string} and  {string}', async function (username, password) {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  this.poManager = new POManager(page);
  const loginPage = this.poManager.getLoginPage();
  await loginPage.goTO();
  await loginPage.validLogin(username, password);
});

Then('Add {string} to Cart', async function (productName) {
  this.dashboardPage = this.poManager.getDashboardPage();
  await this.dashboardPage.searchProductAddCart(productName);
  await this.dashboardPage.navigateToCart();
});
