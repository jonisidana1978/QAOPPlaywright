# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ClientAppPO.spec.js >> Client App Login
- Location: tests\ClientAppPO.spec.js:7:1

# Error details

```
Test timeout of 40000ms exceeded.
```

```
Error: locator.click: Test timeout of 40000ms exceeded.
Call log:
  - waiting for locator('text=Checkout')

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
        - button " Cart 1" [active] [ref=e20]:
          - generic [ref=e21]: 
          - text: Cart
          - generic [ref=e22]: "1"
      - listitem [ref=e23] [cursor=pointer]:
        - button "Sign Out" [ref=e24]:
          - generic [ref=e25]: 
          - text: Sign Out
  - text:    
  - generic [ref=e26]:
    - paragraph [ref=e27]: Home | Search
    - heading "Filters" [level=4] [ref=e29]
    - generic [ref=e30]:
      - textbox "search" [ref=e32]
      - generic [ref=e33]:
        - heading "Price Range" [level=6] [ref=e34]
        - generic [ref=e35]:
          - textbox "Min Price" [ref=e37]
          - textbox "Max Price" [ref=e39]
      - generic [ref=e40]:
        - heading "Categories" [level=6] [ref=e41]
        - generic [ref=e43]: 
        - generic [ref=e44]:
          - checkbox [ref=e45]
          - generic [ref=e46]: fashion
        - generic [ref=e47]:
          - checkbox [ref=e48]
          - generic [ref=e49]: electronics
        - generic [ref=e50]:
          - checkbox [ref=e51]
          - generic [ref=e52]: household
      - generic [ref=e53]:
        - heading "Sub Categories" [level=6] [ref=e54]
        - generic [ref=e56]: 
        - generic [ref=e57]:
          - checkbox [ref=e58]
          - generic [ref=e59]: t-shirts
        - generic [ref=e60]:
          - checkbox [ref=e61]
          - generic [ref=e62]: shirts
        - generic [ref=e63]:
          - checkbox [ref=e64]
          - generic [ref=e65]: shoes
        - generic [ref=e66]:
          - checkbox [ref=e67]
          - generic [ref=e68]: mobiles
        - generic [ref=e69]:
          - checkbox [ref=e70]
          - generic [ref=e71]: laptops
      - generic [ref=e72]:
        - heading "Search For" [level=6] [ref=e73]
        - generic [ref=e75]: 
        - generic [ref=e76]:
          - checkbox [ref=e77]
          - generic [ref=e78]: men
        - generic [ref=e79]:
          - checkbox [ref=e80]
          - generic [ref=e81]: women
  - generic [ref=e82]:
    - generic [ref=e83]:
      - generic [ref=e84]:
        - generic [ref=e85]: Showing 3 results |
        - generic [ref=e86]: User can only see maximum 9 products on a page
      - generic [ref=e87]:
        - generic [ref=e89]:
          - img [ref=e90]
          - generic [ref=e91]:
            - heading "ADIDAS ORIGINAL" [level=5] [ref=e92]
            - generic [ref=e94]: $ 11500
            - button "View" [ref=e95] [cursor=pointer]:
              - generic [ref=e96]: 
              - text: View
            - button " Add To Cart" [ref=e97] [cursor=pointer]:
              - generic [ref=e98]: 
              - text: Add To Cart
        - generic [ref=e100]:
          - img [ref=e101]
          - generic [ref=e102]:
            - heading "ZARA COAT 3" [level=5] [ref=e103]
            - generic [ref=e105]: $ 11500
            - button "View" [ref=e106] [cursor=pointer]:
              - generic [ref=e107]: 
              - text: View
            - button " Add To Cart" [ref=e108] [cursor=pointer]:
              - generic [ref=e109]: 
              - text: Add To Cart
        - generic [ref=e111]:
          - img [ref=e112]
          - generic [ref=e113]:
            - heading "iphone 13 pro" [level=5] [ref=e114]
            - generic [ref=e116]: $ 55000
            - button "View" [ref=e117] [cursor=pointer]:
              - generic [ref=e118]: 
              - text: View
            - button " Add To Cart" [ref=e119] [cursor=pointer]:
              - generic [ref=e120]: 
              - text: Add To Cart
    - list "Pagination" [ref=e125]:
      - listitem [ref=e126]:
        - text: «
        - generic [ref=e127]:
          - text: Previous
          - generic [ref=e128]: page
      - listitem [ref=e129]:
        - generic [ref=e130]: You're on page
        - text: "1"
      - listitem [ref=e131]:
        - generic [ref=e132]:
          - text: Next
          - generic [ref=e133]: page
        - text: »
  - generic [ref=e134]: Design and Developed By - Kunal Sharma
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | const { only } = require('node:test');
  3  | 
  4  | const {LoginPage} = require('../pageobjects/LoginPage');
  5  | //const {AddToCart} = require('../pageobjects/AddToCart');
  6  | const {DashboardPage} =require('../pageobjects/DashboardPage');
  7  | test('Client App Login', async ({page})=>
  8  | 
  9  |     {
  10 |         const username ="pallavsidana@yahoo.com";
  11 |         const password ="Sidana@10";
  12 |         const productNames ='ADIDAS ORIGINAL';
  13 |         const productss = page.locator(".card-body");
  14 |         const cart =page.locator("[routerlink*='cart']")
  15 |         //const LoginPage = new LoginPage(page);
  16 |         const loginPage = new LoginPage(page);
  17 |        // const addToCart = new AddToCart(page);
  18 |         const dashboardPage = new DashboardPage(page);
  19 | 
  20 |         await loginPage.goTO();
  21 |         await loginPage.validLogin(username, password);
  22 |         await dashboardPage.searchProductAddCart(productNames);
  23 |         await dashboardPage.navigateToCart();
  24 | 
  25 | 
  26 |        
  27 |        // const titles = await page.locator(".card-body b").allTextContents();
  28 |        // console.log(titles);
  29 |        // await addToCart.ValidAddtoCart();
  30 |       
  31 |      
  32 | 
  33 | //await page.locator("[routerlink*='cart']").click();
  34 | // await page.locator(".card-body b").first().waitFor();
  35 | await page.locator("div li").first().waitFor();
  36 | //const bool = await page.locator("h3:has-text('ADIDAS ORIGINAL')").isVisible();
  37 | //expect (bool).toBeTruthy();
> 38 | await page.locator("text=Checkout").click();
     |                                     ^ Error: locator.click: Test timeout of 40000ms exceeded.
  39 | await page.locator("input[type='text'].input.txt").nth(1).fill("123");
  40 | 
  41 | const value = await page.locator("input[type='text'].input.txt").nth(1).inputValue();
  42 | 
  43 | console.log(value);
  44 | 
  45 | 
  46 | await page.locator("input[type='text'].input.txt").nth(2).fill("Rahul");
  47 | 
  48 | const value1 = await page.locator("input[type='text'].input.txt").nth(2).inputValue();
  49 | 
  50 | console.log(value1);
  51 | await page.locator("[placeholder*='Country']").pressSequentially("Ind",{delay:1000});
  52 | const dropdown = await page.locator(".ta-results");
  53 | await dropdown.waitFor();
  54 | const optionCounts=await dropdown.locator("button").count();
  55 | for (let i=0;i<optionCounts;++i){
  56 |   const text=await  dropdown.locator("button").nth(i).textContent();
  57 |   if (text ===" India"){
  58 |      await dropdown.locator("button").nth(i).click();
  59 |      break;
  60 |   }
  61 | }
  62 | 
  63 | await page.locator(".action__submit").click();
  64 | expect(await page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
  65 | const orderId=await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
  66 | console.log(orderId);
  67 | 
  68 | //click on the order button
  69 | await page.locator("button[routerlink*='myorders']").click();
  70 | //await page.locator("tbody").waitFor();
  71 | 
  72 | //consider the first row scan the order in the table 
  73 | const rows=await page.locator("tbody tr");
  74 | 
  75 | // using for loop traverse the table
  76 | for (let i=0;i<await rows.count();++i)
  77 | {
  78 |     const rowOrderId= await rows.nth(i).locator("th").textContent();
  79 |     if (orderId.includes(rowOrderId))
  80 |         {
  81 | 
  82 |             // to select the view button 
  83 |         await rows.nth(i).locator("button").first().click();
  84 |         //await row.locator("button.btn.btn-primary").click();
  85 |        // await page.locator("tr:has-text"('" + orderId + "'),button.btn.btn-primary).click();
  86 |         break;
  87 |         }
  88 |         //console.log(print);
  89 |     await page.pause();
  90 | 
  91 | const OrderIdDetails = await page.locator(".col-text").textContent();
  92 | console.log(OrderIdDetails);
  93 | expect(orderId.includes(OrderIdDetails)).toBeTruthy();
  94 | }
  95 | //const OrderIdDetails = await page.locator(".col-text").textContent();
  96 | //console.log(OrderIdDetails);
  97 | //expect(orderId.includes(OrderIdDetails)).toBeTruthy();
  98 | 
  99 | });
```