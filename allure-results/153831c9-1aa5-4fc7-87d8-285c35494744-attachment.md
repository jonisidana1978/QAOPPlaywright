# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ClientAppPO.spec.js >> Client App Login
- Location: tests\ClientAppPO.spec.js:9:1

# Error details

```
ReferenceError: Cannot access 'checkOutPage' before initialization
```

# Test source

```ts
  1   | const { test, expect } = require('@playwright/test');
  2   | const { only } = require('node:test');
  3   | 
  4   | const {LoginPage} = require('../pageobjects/LoginPage');
  5   | //const {AddToCart} = require('../pageobjects/AddToCart');
  6   | const {DashboardPage} =require('../pageobjects/DashboardPage');
  7   | const {checkOutPage}= require('../pageobjects/checkOutPage');
  8   | 
  9   | test('Client App Login', async ({page})=>
  10  | 
  11  |     {
  12  |         const username ="pallavsidana@yahoo.com";
  13  |         const password ="Sidana@10";
  14  |         const productNames ='ADIDAS ORIGINAL';
  15  |         const productss = page.locator(".card-body");
  16  |         const cart =page.locator("[routerlink*='cart']")
  17  |         //const LoginPage = new LoginPage(page);
  18  |         const loginPage = new LoginPage(page);
  19  |        // const addToCart = new AddToCart(page);
  20  |         const dashboardPage = new DashboardPage(page);
> 21  |         const checkOutPage = new checkOutPage(page);
      |                              ^ ReferenceError: Cannot access 'checkOutPage' before initialization
  22  | 
  23  |         await loginPage.goTO();
  24  |         await loginPage.validLogin(username, password);
  25  |         await dashboardPage.searchProductAddCart(productNames);
  26  |         await dashboardPage.navigateToCart();
  27  |         await checkOutPage.checkout();
  28  | 
  29  |        
  30  |        // const titles = await page.locator(".card-body b").allTextContents();
  31  |        // console.log(titles);
  32  |        // await addToCart.ValidAddtoCart();
  33  |       
  34  |      
  35  | 
  36  | //await page.locator("[routerlink*='cart']").click();
  37  | //await page.locator(".card-body b").first().waitFor();
  38  | /*
  39  | await page.locator("div li").first().waitFor();
  40  | //const bool = await page.locator("h3:has-text('ADIDAS ORIGINAL')").isVisible();
  41  | //expect (bool).toBeTruthy();
  42  | await page.locator("text=Checkout").click();
  43  | await page.locator("input[type='text'].input.txt").nth(1).fill("123");
  44  | 
  45  | const value = await page.locator("input[type='text'].input.txt").nth(1).inputValue();
  46  | 
  47  | console.log(value);
  48  | 
  49  | 
  50  | await page.locator("input[type='text'].input.txt").nth(2).fill("Rahul");
  51  | 
  52  | const value1 = await page.locator("input[type='text'].input.txt").nth(2).inputValue();
  53  | 
  54  | console.log(value1);
  55  | await page.locator("[placeholder*='Country']").pressSequentially("Ind",{delay:1000});
  56  | const dropdown = await page.locator(".ta-results");
  57  | await dropdown.waitFor();
  58  | const optionCounts=await dropdown.locator("button").count();
  59  | for (let i=0;i<optionCounts;++i){
  60  |   const text=await  dropdown.locator("button").nth(i).textContent();
  61  |   if (text ===" India"){
  62  |      await dropdown.locator("button").nth(i).click();
  63  |      break;
  64  |   }
  65  | }
  66  | */
  67  | 
  68  | await page.locator(".action__submit").click();
  69  | expect(await page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
  70  | const orderId=await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
  71  | console.log(orderId);
  72  | 
  73  | //click on the order button
  74  | await page.locator("button[routerlink*='myorders']").click();
  75  | //await page.locator("tbody").waitFor();
  76  | 
  77  | //consider the first row scan the order in the table 
  78  | const rows=await page.locator("tbody tr");
  79  | 
  80  | // using for loop traverse the table
  81  | for (let i=0;i<await rows.count();++i)
  82  | {
  83  |     const rowOrderId= await rows.nth(i).locator("th").textContent();
  84  |     if (orderId.includes(rowOrderId))
  85  |         {
  86  | 
  87  |             // to select the view button 
  88  |         await rows.nth(i).locator("button").first().click();
  89  |         //await row.locator("button.btn.btn-primary").click();
  90  |        // await page.locator("tr:has-text"('" + orderId + "'),button.btn.btn-primary).click();
  91  |         break;
  92  |         }
  93  |         //console.log(print);
  94  |     await page.pause();
  95  | 
  96  | const OrderIdDetails = await page.locator(".col-text").textContent();
  97  | console.log(OrderIdDetails);
  98  | expect(orderId.includes(OrderIdDetails)).toBeTruthy();
  99  | }
  100 | //const OrderIdDetails = await page.locator(".col-text").textContent();
  101 | //console.log(OrderIdDetails);
  102 | //expect(orderId.includes(OrderIdDetails)).toBeTruthy();
  103 | 
  104 | });
```