# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: WebAPIPart2.spec.js >> @API Place the order
- Location: tests\WebAPIPart2.spec.js:22:1

# Error details

```
TypeError: ApiUtils is not a constructor
```

# Test source

```ts
  1  | const {request,test,expect}= require('@playwright/test');
  2  | const loginPayLoad= {userEmail: "pallavsidana@yahoo.com",
  3  |     userPassword:"Sidana@10"
  4  | };
  5  | const {ApiUtils} = require('../utils/APiUtils');
  6  | let orderId;
  7  | const OrderPayLoad= {orders:[{country:"Cuba",productOrderedId:"6960eac0c941646b7a8b3e68"}]};
  8  | let token;
  9  | //login API call and get the token and store it in a variable
  10 | let response;
  11 | test.beforeAll(async () => {
  12 |     const apiContext = await request.newContext();
> 13 |     const apiUtils = new ApiUtils(apiContext,loginPayLoad);
     |                      ^ TypeError: ApiUtils is not a constructor
  14 |     response = await apiUtils.crearteOrder(orderPayLoad);
  15 |     //token = await APiUtils.getToken();
  16 |    // const orderResponse = await APiUtils.crearteOrder(token);
  17 |    // const orderResponseJson = await orderResponse.json();
  18 |    // console.log(orderResponseJson);
  19 |    // orderId = orderResponseJson.orders[0];
  20 | });
  21 | 
  22 | test('@API Place the order', async ({page})=>
  23 |     {
  24 |         //added for refactor
  25 |         await page.addInitScript(value => {
  26 |         window.localStorage.setItem('token', value);
  27 |         }, token);
  28 |         await page.goto("https://rahulshettyacademy.com/client");
  29 |     //click on the order button
  30 | await page.locator("button[routerlink*='myorders']").click();
  31 | //consider the first row scan the order in the table 
  32 | const rows=await page.locator("tbody tr");
  33 | // using for loop traverse the table
  34 | for (let i=0;i<await rows.count();++i)
  35 | {
  36 |     const rowOrderId= await rows.nth(i).locator("th").textContent();
  37 |     if (orderId.includes(rowOrderId))
  38 |         {
  39 |         // to select the view button 
  40 |         await rows.nth(i).locator("button").first().click();
  41 |         break;
  42 |         }
  43 |   const OrderIdDetails = await page.locator(".col-text").textContent();
  44 | //console.log(OrderIdDetails);
  45 | expect(orderId.includes(OrderIdDetails)).toBeTruthy();
  46 | }
  47 | });
  48 | 
  49 | //verify if the order created is present in the order history page
  50 | //precondition: create order
  51 | 
```