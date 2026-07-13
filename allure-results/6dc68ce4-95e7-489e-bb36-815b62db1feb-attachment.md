# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: parameterization.spec.js >> checking for parameter ADIDAS ORIGINAL
- Location: tests\parameterization.spec.js:8:5

# Error details

```
TypeError: page.validLogin is not a function
```

# Test source

```ts
  1  | 
  2  | const {POManager} = require('../pageobjects/POManager');
  3  | const { test, expect } = require('@playwright/test');
  4  | // JSON -> string -> JS object
  5  | const dataset = JSON.parse(JSON.stringify(require('../utils/placeorderTestData.json')));
  6  | 
  7  | for (const data of dataset) {
  8  |     test(`checking for parameter ${data.productNames}`, async ({ page }) => {
  9  |         console.log(`Running parameterized test for ${data.productNames}`);
  10 |         expect(data.productNames).toBeTruthy();
  11 |         
> 12 |         await page.validLogin(data.username, data.password);
     |                    ^ TypeError: page.validLogin is not a function
  13 |         a
  14 |     });
  15 | }
  16 | 
  17 | 
```