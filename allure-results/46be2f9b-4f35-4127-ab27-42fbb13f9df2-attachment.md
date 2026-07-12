# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ClientAppPO.spec.js >> Client App Login
- Location: tests\ClientAppPO.spec.js:12:1

# Error details

```
Test timeout of 40000ms exceeded.
```

```
Error: locator.waitFor: Test timeout of 40000ms exceeded.
Call log:
  - waiting for locator('.card-body b').first() to be visible

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation [ref=e5]:
    - generic [ref=e7]:
      - link "Automation Automation Practice":
        - /url: ""
        - generic [ref=e8] [cursor=pointer]:
          - heading "Automation" [level=3] [ref=e9]
          - paragraph [ref=e10]: Automation Practice
    - text: 
    - link "Get Shortlisted by Recruiters - Take QA Skill Assessments on TechSmartHire" [ref=e11] [cursor=pointer]:
      - /url: https://techsmarthire.com/
    - list [ref=e12]:
      - listitem [ref=e13] [cursor=pointer]:
        - button " HOME" [ref=e14]:
          - generic [ref=e15]: 
          - text: HOME
      - listitem
      - listitem [ref=e16] [cursor=pointer]:
        - button " ORDERS" [ref=e17]:
          - generic [ref=e18]: 
          - text: ORDERS
      - listitem [ref=e19] [cursor=pointer]:
        - button " Cart 1" [ref=e20]:
          - generic [ref=e21]: 
          - text: Cart
          - generic [ref=e22]: "1"
      - listitem [ref=e23] [cursor=pointer]:
        - button "Sign Out" [ref=e24]:
          - generic [ref=e25]: 
          - text: Sign Out
  - generic [ref=e26]:
    - generic [ref=e27]:
      - heading "My Cart" [level=1] [ref=e28]
      - button "Continue Shopping❯" [ref=e29] [cursor=pointer]
    - list [ref=e31]:
      - listitem [ref=e32] [cursor=pointer]:
        - generic [ref=e33]:
          - generic [ref=e34]:
            - paragraph [ref=e35]: "#6960eae1c941646b7a8b3ed3"
            - heading "ADIDAS ORIGINAL" [level=3] [ref=e36]
            - paragraph [ref=e37]: MRP $ 11500
            - paragraph [ref=e38]: In Stock
          - paragraph [ref=e40]: $ 11500
          - generic [ref=e41]:
            - button "Buy Now❯" [ref=e42]
            - button "❯" [ref=e43]:
              - generic [ref=e44]: 
              - text: ❯
    - list [ref=e46]:
      - listitem [ref=e47]:
        - generic [ref=e48]: Subtotal
        - generic [ref=e49]: $11500
      - listitem [ref=e50]:
        - generic [ref=e51]: Total
        - generic [ref=e52]: $11500
      - listitem [ref=e53]:
        - button "Checkout❯" [ref=e54] [cursor=pointer]
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | const { only } = require('node:test');
  3  | 
  4  | 
  5  | const {POManager} = require('../pageobjects/POManager');
  6  | // converted the json to object ( javascript object)
  7  | // parse this json to javascript object
  8  | //convert the json into string and then convert to java object
  9  | //json->String-> js object
  10 | //json is class
  11 | const dataSet = JSON.parse(JSON.stringify(require('../utils/placeorderTestData.json')));
  12 | test('Client App Login', async ({page})=>
  13 | 
  14 |     {
  15 |        const poManager =new POManager(page);
  16 | 
  17 |       
  18 |         const productss = page.locator(".card-body");
  19 |         const cart =page.locator("[routerlink*='cart']")
  20 |         const loginPage = poManager.getLoginPage();
  21 |         await loginPage.goTO();
  22 |         await loginPage.validLogin(dataSet.username,dataSet.password);
  23 |         const dashboardPage = poManager.getDashboardPage();
  24 |         await dashboardPage.searchProductAddCart(dataSet.productNames);
  25 |         await dashboardPage.navigateToCart();
> 26 |         await page.locator(".card-body b").first().waitFor();
     |                                                    ^ Error: locator.waitFor: Test timeout of 40000ms exceeded.
  27 |         await page.locator("div li").first().waitFor();
  28 |         const bool = await page.locator("h3:has-text('ADIDAS ORIGINAL')").isVisible();
  29 |         expect (bool).toBeTruthy();
  30 |         await page.locator("text=Checkout").click();
  31 |         await page.locator("input[type='text'].input.txt").nth(1).fill("123");
  32 | 
  33 |         const value = await page.locator("input[type='text'].input.txt").nth(1).inputValue();
  34 | 
  35 |         console.log(value);
  36 | 
  37 | 
  38 |         await page.locator("input[type='text'].input.txt").nth(2).fill("Rahul");
  39 | 
  40 |         const value1 = await page.locator("input[type='text'].input.txt").nth(2).inputValue();
  41 | 
  42 |         console.log(value1);
  43 |         await page.locator("[placeholder*='Country']").pressSequentially("Ind",{delay:1000});
  44 |         const dropdown = await page.locator(".ta-results");
  45 |         await dropdown.waitFor();
  46 |         const optionCounts=await dropdown.locator("button").count();
  47 |         for (let i=0;i<optionCounts;++i){
  48 |             const text=await  dropdown.locator("button").nth(i).textContent();
  49 |             if (text ===" India"){
  50 |                 await dropdown.locator("button").nth(i).click();
  51 |                 break;
  52 |             }
  53 |         }
  54 | 
  55 |         await page.locator(".action__submit").click();
  56 |         expect(await page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
  57 |         const orderId=await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
  58 |         console.log(orderId);
  59 | 
  60 |         //click on the order button
  61 |         await page.locator("button[routerlink*='myorders']").click();
  62 |         //await page.locator("tbody").waitFor();
  63 | 
  64 |         //consider the first row scan the order in the table 
  65 |         const rows=await page.locator("tbody tr");
  66 | 
  67 |         // using for loop traverse the table
  68 |         for (let i=0;i<await rows.count();++i)
  69 |             {
  70 |                 const rowOrderId= await rows.nth(i).locator("th").textContent();
  71 |                 if (orderId.includes(rowOrderId))
  72 |                     {
  73 |                         // to select the view button 
  74 |                         await rows.nth(i).locator("button").first().click();
  75 |                         //await row.locator("button.btn.btn-primary").click();
  76 |                         // await page.locator("tr:has-text"('" + orderId + "'),button.btn.btn-primary).click();
  77 |                         break;
  78 |                     }
  79 |         //console.log(print);
  80 |         await page.pause();
  81 | 
  82 |         const OrderIdDetails = await page.locator(".col-text").textContent();
  83 |         console.log(OrderIdDetails);
  84 |         expect(orderId.includes(OrderIdDetails)).toBeTruthy();
  85 |     }
  86 |     //const OrderIdDetails = await page.locator(".col-text").textContent();
  87 |     //console.log(OrderIdDetails);
  88 |     //expect(orderId.includes(OrderIdDetails)).toBeTruthy();
  89 | 
  90 | });
```