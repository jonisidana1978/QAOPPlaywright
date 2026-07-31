const { POManager } = require("../../pageobjects/POManager");
const { Before, After, BeforeStep, AfterStep ,Status, AfterAll} = require("@cucumber/cucumber");
//const { Status } = require("allure-js-commons");
const { chromium } = require('playwright');

Before(async function () {

    this.browser = await chromium.launch({
        headless: false
    });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
    this.poManager = new POManager(this.page);

});

After(async function () {
    console.log("i am the last to execute");
    if (this.page) {
        await this.page.close();
    }
    if (this.context) {
        await this.context.close();
    }
    if (this.browser) {
        await this.browser.close();
    }
});


BeforeStep(function () {


});
AfterStep(async function ({ result }) {
    if (result.status == Status.FAILED) {
        await this.page.screenshot({path:'screenshot.png'});
    }

});

AfterAll(async function () {
    // no-op: browser is closed in After for each scenario
});