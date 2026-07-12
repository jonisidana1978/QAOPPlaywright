const { test, expect } = require('@playwright/test');
const { POManager } = require('../pageobjects/POManager');

/**
 * Load test data from the JSON fixture used by this flow.
 * The data includes login credentials and the product to be ordered.
 */
const dataSet = JSON.parse(JSON.stringify(require('../utils/placeorderTestData.json')));

/**
 * End-to-end order placement flow for the client application.
 * The test logs in, adds a product to the cart, places an order, and validates the order ID.
 */
test('Client App Login', async ({ page }) => {
    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();
    const dashboardPage = poManager.getDashboardPage();

    // Open the application and sign in with the test credentials.
    await loginPage.goTO();
    await loginPage.validLogin(dataSet.username, dataSet.password);

    // Search for the desired product and add it to the cart.
    await dashboardPage.searchProductAddCart(dataSet.productNames);
    await dashboardPage.navigateToCart();

    // Proceed to checkout and fill the required shipping information.
    await page.locator('text=Checkout').click();
    await page.locator("input[type='text'].input.txt").nth(1).fill('123');
    await page.locator("input[type='text'].input.txt").nth(2).fill('Pallav Sidana');

    // Select the country from the autocomplete dropdown.
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

    // Submit the order and verify the confirmation message.
    await page.locator('.action__submit').click();
    await expect(page.locator('.hero-primary')).toHaveText(' Thankyou for the order. ');

    const orderId = await page.locator('.em-spacer-1 .ng-star-inserted').textContent();
    console.log(orderId);

    // Open the orders section and confirm the newly placed order appears in the table.
    await page.locator("button[routerlink*='myorders']").click();
    const rows = page.locator('tbody tr');

    for (let i = 0; i < await rows.count(); ++i) {
        const rowOrderId = await rows.nth(i).locator('th').textContent();
        if (orderId.includes(rowOrderId)) {
            await rows.nth(i).locator('button').first().click();
            break;
        }
    }

    // Keep the browser open for manual inspection when needed.
   // await page.pause();

    const orderIdDetails = await page.locator('.col-text').textContent();
    console.log(orderIdDetails);
    expect(orderId.includes(orderIdDetails)).toBeTruthy();
});