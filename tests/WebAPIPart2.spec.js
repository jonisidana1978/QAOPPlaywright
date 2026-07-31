const {request,test,expect}= require('@playwright/test');
const loginPayLoad= {userEmail: "pallavsidana@yahoo.com",
    userPassword:"Sidana@10"
};
const {ApiUtils} = require('../utils/APiUtils');
let orderId;
const orderPayLoad= {orders:[{country:"Cuba",productOrderedId:"6960eac0c941646b7a8b3e68"}]};
let token;
//login API call and get the token and store it in a variable
let response;

test.describe('API order flow', () => {
    test.beforeAll(async () => {
        const apiContext = await request.newContext();
        const apiUtils = new ApiUtils(apiContext, loginPayLoad);
        response = await apiUtils.crearteOrder(orderPayLoad);
        token = response.token;
        orderId = response.orderId;
    });

    test('@API Place the order', async ({ page }) => {
        await page.addInitScript(value => {
            window.localStorage.setItem('token', value);
        }, token);
        await page.goto('https://rahulshettyacademy.com/client');

        await page.locator("button[routerlink*='myorders']").click();

        const rows = await page.locator('tbody tr');
        let found = false;

        for (let i = 0; i < await rows.count(); ++i) {
            const rowOrderId = await rows.nth(i).locator('th').textContent();
            if (orderId.includes(rowOrderId)) {
                await rows.nth(i).locator('button').first().click();
                found = true;
                break;
            }
        }

        expect(found).toBeTruthy();
    });

    test.afterAll(async ({ browser }) => {
        await browser.close();
    });
});