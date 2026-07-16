const { test, expect } = require('@playwright/test');
const { customtest } = require('../utils/test-base');
const { POManager } = require('../pageobjects/POManager');

// Convert the JSON fixture into a JavaScript object.
const dataSet = JSON.parse(JSON.stringify(require('../utils/placeorderTestData.json')));

test.describe('Client App Login Suite', () => {
    test.describe.configure({ mode: 'parallel' });

    for (const data of dataSet) {
        test(`Client App Login ${data.productNames}`, async ({ page }) => {
        const poManager = new POManager(page);
        const loginPage = poManager.getLoginPage();

        await loginPage.goTO();
        await loginPage.validLogin(data.username, data.password);

        const dashboardPage = poManager.getDashboardPage();
        await dashboardPage.searchProductAddCart(data.productNames);
        await dashboardPage.navigateToCart();

        await page.locator('text=Checkout').click();
        await page.locator("input[type='text'].input.txt").nth(1).fill('123');
        await page.locator("input[type='text'].input.txt").nth(2).fill('Pallav Sidana');

        await page.locator("[placeholder*='Country']").pressSequentially('Ind', { delay: 1000 });
        const dropdown = page.locator('.ta-results');
        await dropdown.waitFor();
        const optionCounts = await dropdown.locator('button').count();

        for (let i = 0; i < optionCounts; ++i) {
            const text = await dropdown.locator('button').nth(i).textContent();
            if (text === ' India') {
                await dropdown.locator('button').nth(i).click();
                break;
            }
        }

        await page.locator('.action__submit').click();
        await expect(page.locator('.hero-primary')).toHaveText(' Thankyou for the order. ');

        const orderId = await page.locator('.em-spacer-1 .ng-star-inserted').textContent();
        console.log(orderId);

        await page.locator("button[routerlink*='myorders']").click();
        const rows = page.locator('tbody tr');

        for (let i = 0; i < await rows.count(); ++i) {
            const rowOrderId = await rows.nth(i).locator('th').textContent();
            if (orderId.includes(rowOrderId)) {
                await rows.nth(i).locator('button').first().click();
                break;
            }
        }

        await page.pause();
        const orderIdDetails = await page.locator('.col-text').textContent();
        console.log(orderIdDetails);
        expect(orderId.includes(orderIdDetails)).toBeTruthy();
    });
}
});

customtest.only('Client app for login', async ({ page, testDataForOrder }) => {
    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();

    await loginPage.goTO();
    await loginPage.validLogin(testDataForOrder.username, testDataForOrder.password);

    const dashboardPage = poManager.getDashboardPage();
    await dashboardPage.searchProductAddCart(testDataForOrder.productNames);
    await dashboardPage.navigateToCart();

    await page.locator('text=Checkout').click();
    await page.locator("input[type='text'].input.txt").nth(1).fill('123');
    console.log(await page.locator("input[type='text'].input.txt").nth(1).inputValue());
});