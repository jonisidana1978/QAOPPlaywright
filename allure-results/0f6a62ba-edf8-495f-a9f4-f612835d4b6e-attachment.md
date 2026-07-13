# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ClientAppPO.spec.js >> Client app for login
- Location: tests\ClientAppPO.spec.js:61:12

# Error details

```
Test timeout of 40000ms exceeded.
```

```
Error: locator.click: Test timeout of 40000ms exceeded.
Call log:
  - waiting for locator('text=Checkout')
    - locator resolved to <button type="button" _ngcontent-gsx-c36="" class="btn btn-primary">Checkout</button>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
  - element was detached from the DOM, retrying

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - banner [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e7]: Ecom
      - generic [ref=e9]:
        - link " dummywebsite@rahulshettyacademy.com" [ref=e11] [cursor=pointer]:
          - /url: emailto:dummywebsite@rahulshettyacademy.com
          - generic [ref=e12]: 
          - text: dummywebsite@rahulshettyacademy.com
        - generic [ref=e13]:
          - link "" [ref=e14] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e15]: 
          - link "" [ref=e16] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e17]: 
          - link "" [ref=e18] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e19]: 
          - link "" [ref=e20] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e21]: 
  - generic [ref=e22]:
    - generic [ref=e23]:
      - heading "We Make Your Shopping Simple" [level=3]
      - heading "Practice Website for Rahul Shetty Academy Students" [level=1] [ref=e24]:
        - text: Practice Website for
        - emphasis [ref=e25]: Rahul Shetty Academy
        - text: Students
      - link "Register" [ref=e26] [cursor=pointer]:
        - /url: "#/auth/register"
    - generic [ref=e28]:
      - paragraph [ref=e29]:
        - generic [ref=e30]: Register to sign in with your personal account
      - generic [ref=e31]:
        - heading "Log in" [level=1] [ref=e32]
        - generic [ref=e33]:
          - generic [ref=e34]:
            - generic [ref=e35]: Email
            - textbox "email@example.com" [ref=e36]
          - generic [ref=e37]:
            - generic [ref=e38]: Password
            - textbox "enter your passsword" [ref=e39]
          - button "Login" [ref=e40] [cursor=pointer]
        - link "Forgot password?" [ref=e41] [cursor=pointer]:
          - /url: "#/auth/password-new"
        - paragraph [ref=e42] [cursor=pointer]: Don't have an account? Register here
  - generic [ref=e43]:
    - heading "Why People Choose Us?" [level=1] [ref=e46]
    - generic [ref=e47]:
      - generic [ref=e48]:
        - generic [ref=e50]: 
        - generic [ref=e51]:
          - heading "3546540" [level=1]
          - paragraph [ref=e52]: Successfull Orders
      - generic [ref=e53]:
        - generic [ref=e55]: 
        - generic [ref=e56]:
          - heading "37653" [level=1]
          - paragraph [ref=e57]: Customers
      - generic [ref=e58]:
        - generic [ref=e60]: 
        - generic [ref=e61]:
          - heading "3243" [level=1]
          - paragraph [ref=e62]: Sellers
    - generic [ref=e63]:
      - generic [ref=e64]:
        - generic [ref=e66]: 
        - generic [ref=e67]:
          - heading "4500+" [level=1]
          - paragraph [ref=e68]: Daily Orders
      - generic [ref=e69]:
        - generic [ref=e71]: 
        - generic [ref=e72]:
          - heading "500+" [level=1]
          - paragraph [ref=e73]: Daily New Customer Joining
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | const { customtest } = require('../utils/test-base');
  3  | const { POManager } = require('../pageobjects/POManager');
  4  | 
  5  | // Convert the JSON fixture into a JavaScript object.
  6  | const dataSet = JSON.parse(JSON.stringify(require('../utils/placeorderTestData.json')));
  7  | 
  8  | for (const data of dataSet) {
  9  |     test(`Client App Login ${data.productNames}`, async ({ page }) => {
  10 |         const poManager = new POManager(page);
  11 |         const loginPage = poManager.getLoginPage();
  12 | 
  13 |         await loginPage.goTO();
  14 |         await loginPage.validLogin(data.username, data.password);
  15 | 
  16 |         const dashboardPage = poManager.getDashboardPage();
  17 |         await dashboardPage.searchProductAddCart(data.productNames);
  18 |         await dashboardPage.navigateToCart();
  19 | 
  20 |         await page.locator('text=Checkout').click();
  21 |         await page.locator("input[type='text'].input.txt").nth(1).fill('123');
  22 |         await page.locator("input[type='text'].input.txt").nth(2).fill('Pallav Sidana');
  23 | 
  24 |         await page.locator("[placeholder*='Country']").pressSequentially('Ind', { delay: 1000 });
  25 |         const dropdown = page.locator('.ta-results');
  26 |         await dropdown.waitFor();
  27 |         const optionCounts = await dropdown.locator('button').count();
  28 | 
  29 |         for (let i = 0; i < optionCounts; ++i) {
  30 |             const text = await dropdown.locator('button').nth(i).textContent();
  31 |             if (text === ' India') {
  32 |                 await dropdown.locator('button').nth(i).click();
  33 |                 break;
  34 |             }
  35 |         }
  36 | 
  37 |         await page.locator('.action__submit').click();
  38 |         await expect(page.locator('.hero-primary')).toHaveText(' Thankyou for the order. ');
  39 | 
  40 |         const orderId = await page.locator('.em-spacer-1 .ng-star-inserted').textContent();
  41 |         console.log(orderId);
  42 | 
  43 |         await page.locator("button[routerlink*='myorders']").click();
  44 |         const rows = page.locator('tbody tr');
  45 | 
  46 |         for (let i = 0; i < await rows.count(); ++i) {
  47 |             const rowOrderId = await rows.nth(i).locator('th').textContent();
  48 |             if (orderId.includes(rowOrderId)) {
  49 |                 await rows.nth(i).locator('button').first().click();
  50 |                 break;
  51 |             }
  52 |         }
  53 | 
  54 |         await page.pause();
  55 |         const orderIdDetails = await page.locator('.col-text').textContent();
  56 |         console.log(orderIdDetails);
  57 |         expect(orderId.includes(orderIdDetails)).toBeTruthy();
  58 |     });
  59 | }
  60 | 
  61 | customtest.only('Client app for login', async ({ page, testDataForOrder }) => {
  62 |     const poManager = new POManager(page);
  63 |     const loginPage = poManager.getLoginPage();
  64 | 
  65 |     await loginPage.goTO();
  66 |     await loginPage.validLogin(testDataForOrder.username, testDataForOrder.password);
  67 | 
  68 |     const dashboardPage = poManager.getDashboardPage();
  69 |     await dashboardPage.searchProductAddCart(testDataForOrder.productNames);
  70 |     await dashboardPage.navigateToCart();
  71 | 
> 72 |     await page.locator('text=Checkout').click();
     |                                         ^ Error: locator.click: Test timeout of 40000ms exceeded.
  73 |     await page.locator("input[type='text'].input.txt").nth(1).fill('123');
  74 |     console.log(await page.locator("input[type='text'].input.txt").nth(1).inputValue());
  75 | });
```