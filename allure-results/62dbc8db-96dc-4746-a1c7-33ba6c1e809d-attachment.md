# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ClientAppPO.spec.js >> Client App Login
- Location: tests\ClientAppPO.spec.js:9:1

# Error details

```
TypeError: Cannot set properties of undefined (setting 'text1')
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
> 17  |          this.text1 =page.locator("div li").first();
      |                    ^ TypeError: Cannot set properties of undefined (setting 'text1')
  18  |         this.checkoutText= page.locator("text=Checkout");
  19  |         this.country =page.locator("[placeholder*='Country']");
  20  |         //const LoginPage = new LoginPage(page);
  21  |         const loginPage = new LoginPage(page);
  22  |        // const addToCart = new AddToCart(page);
  23  |         const dashboardPage = new DashboardPage(page);
  24  |   
  25  | 
  26  |         await loginPage.goTO();
  27  |         await loginPage.validLogin(username, password);
  28  |         await dashboardPage.searchProductAddCart(productNames);
  29  |         await dashboardPage.navigateToCart();
  30  | 
  31  |               const checkOutPage = new checkOutPage(page);
  32  |         await checkOutPage.checkout(text1,checkoutText,country);
  33  | 
  34  |        
  35  |        // const titles = await page.locator(".card-body b").allTextContents();
  36  |        // console.log(titles);
  37  |        // await addToCart.ValidAddtoCart();
  38  |       
  39  |      
  40  | 
  41  | //await page.locator("[routerlink*='cart']").click();
  42  | //await page.locator(".card-body b").first().waitFor();
  43  | /*
  44  | await page.locator("div li").first().waitFor();
  45  | //const bool = await page.locator("h3:has-text('ADIDAS ORIGINAL')").isVisible();
  46  | //expect (bool).toBeTruthy();
  47  | await page.locator("text=Checkout").click();
  48  | await page.locator("input[type='text'].input.txt").nth(1).fill("123");
  49  | 
  50  | const value = await page.locator("input[type='text'].input.txt").nth(1).inputValue();
  51  | 
  52  | console.log(value);
  53  | 
  54  | 
  55  | await page.locator("input[type='text'].input.txt").nth(2).fill("Rahul");
  56  | 
  57  | const value1 = await page.locator("input[type='text'].input.txt").nth(2).inputValue();
  58  | 
  59  | console.log(value1);
  60  | await page.locator("[placeholder*='Country']").pressSequentially("Ind",{delay:1000});
  61  | const dropdown = await page.locator(".ta-results");
  62  | await dropdown.waitFor();
  63  | const optionCounts=await dropdown.locator("button").count();
  64  | for (let i=0;i<optionCounts;++i){
  65  |   const text=await  dropdown.locator("button").nth(i).textContent();
  66  |   if (text ===" India"){
  67  |      await dropdown.locator("button").nth(i).click();
  68  |      break;
  69  |   }
  70  | }
  71  | */
  72  | 
  73  | await page.locator(".action__submit").click();
  74  | expect(await page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
  75  | const orderId=await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
  76  | console.log(orderId);
  77  | 
  78  | //click on the order button
  79  | await page.locator("button[routerlink*='myorders']").click();
  80  | //await page.locator("tbody").waitFor();
  81  | 
  82  | //consider the first row scan the order in the table 
  83  | const rows=await page.locator("tbody tr");
  84  | 
  85  | // using for loop traverse the table
  86  | for (let i=0;i<await rows.count();++i)
  87  | {
  88  |     const rowOrderId= await rows.nth(i).locator("th").textContent();
  89  |     if (orderId.includes(rowOrderId))
  90  |         {
  91  | 
  92  |             // to select the view button 
  93  |         await rows.nth(i).locator("button").first().click();
  94  |         //await row.locator("button.btn.btn-primary").click();
  95  |        // await page.locator("tr:has-text"('" + orderId + "'),button.btn.btn-primary).click();
  96  |         break;
  97  |         }
  98  |         //console.log(print);
  99  |     await page.pause();
  100 | 
  101 | const OrderIdDetails = await page.locator(".col-text").textContent();
  102 | console.log(OrderIdDetails);
  103 | expect(orderId.includes(OrderIdDetails)).toBeTruthy();
  104 | }
  105 | //const OrderIdDetails = await page.locator(".col-text").textContent();
  106 | //console.log(OrderIdDetails);
  107 | //expect(orderId.includes(OrderIdDetails)).toBeTruthy();
  108 | 
  109 | });
```