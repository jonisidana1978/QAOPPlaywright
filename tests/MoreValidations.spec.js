const { test, expect } = require('@playwright/test');

test('more validations', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await expect(page.locator('#displayed-text')).toBeVisible();
    await page.locator('#hide-textbox').click();
    await expect(page.locator('#displayed-text')).toBeHidden();
    page.on('dialog', dialog => dialog.dismiss());
    await page.locator('#confirmbtn').click();
    await page.locator('#mousehover').hover();
    await page.locator('text=Top').click();
    await expect(page.locator('#mousehover')).toBeVisible();
});