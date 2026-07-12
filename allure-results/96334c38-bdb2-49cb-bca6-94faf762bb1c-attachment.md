# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ClientAppPO.spec.js >> Client App Login
- Location: tests\ClientAppPO.spec.js:6:1

# Error details

```
ReferenceError: Cannot access 'AddToCart' before initialization
```

# Test source

```ts
  1   | const { test, expect } = require('@playwright/test');
  2   | const { only } = require('node:test');
  3   | 
  4   | const {LoginPage} = require('../pageobjects/LoginPage');
  5   | const {AddToCart} = require('../pageobjects/AddToCart');
  6   | test('Client App Login', async ({page})=>
  7   | 
  8   |     {
  9   |         const username ="pallavsidana@yahoo.com";
  10  |         const password ="Sidana@10";
  11  |         const productNames ='ADIDAS ORIGINAL';
  12  |         const productss = page.locator(".card-body");
  13  |         //const LoginPage = new LoginPage(page);
  14  |         const loginPage = new LoginPage(page);
> 15  |         const AddToCart = new AddToCart(page);
      |                           ^ ReferenceError: Cannot access 'AddToCart' before initialization
  16  |         loginPage.goTO();
  17  |         loginPage.validLogin(username,password);
  18  |         AddToCart.ValidAddtoCart(productNames,productss);
  19  |         await page.screenshot({path:'login.png'});
  20  |         await page.waitForLoadState('networkidle');
  21  |         await page.locator(".card-body b").first().waitFor();
  22  |         const titles = await page.locator(".card-body b").allTextContents();
  23  |         console.log(titles);
  24  |         //AddToCart.val
  25  |      /*   const count =await products.count();
  26  |         for (let i=0 ; i<count;i++)
  27  |         {
  28  |             if (await products.nth(i).locator("b").textContent()=== productName)
  29  |             {
  30  |                 //add the item to cart
  31  |                 await products.nth(i).locator("text= Add To Cart").click();
  32  |                 break;
  33  |             }
  34  | 
  35  |         }
  36  | 
  37  | await page.locator("[routerlink*='cart']").click();
  38  | await page.locator("div li").first().waitFor();
  39  | const bool = await page.locator("h3:has-text('ADIDAS ORIGINAL')").isVisible();
  40  | expect (bool).toBeTruthy();
  41  | await page.locator("text=Checkout").click();
  42  | */
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
  66  | 
  67  | await page.locator(".action__submit").click();
  68  | expect(await page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
  69  | const orderId=await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
  70  | console.log(orderId);
  71  | 
  72  | //click on the order button
  73  | await page.locator("button[routerlink*='myorders']").click();
  74  | //await page.locator("tbody").waitFor();
  75  | 
  76  | //consider the first row scan the order in the table 
  77  | const rows=await page.locator("tbody tr");
  78  | 
  79  | // using for loop traverse the table
  80  | for (let i=0;i<await rows.count();++i)
  81  | {
  82  |     const rowOrderId= await rows.nth(i).locator("th").textContent();
  83  |     if (orderId.includes(rowOrderId))
  84  |         {
  85  | 
  86  |             // to select the view button 
  87  |         await rows.nth(i).locator("button").first().click();
  88  |         //await row.locator("button.btn.btn-primary").click();
  89  |        // await page.locator("tr:has-text"('" + orderId + "'),button.btn.btn-primary).click();
  90  |         break;
  91  |         }
  92  |         //console.log(print);
  93  |     await page.pause();
  94  | 
  95  | const OrderIdDetails = await page.locator(".col-text").textContent();
  96  | console.log(OrderIdDetails);
  97  | expect(orderId.includes(OrderIdDetails)).toBeTruthy();
  98  | }
  99  | //const OrderIdDetails = await page.locator(".col-text").textContent();
  100 | //console.log(OrderIdDetails);
  101 | //expect(orderId.includes(OrderIdDetails)).toBeTruthy();
  102 | 
  103 | });
```