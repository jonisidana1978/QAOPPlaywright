# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ClientAppPO.spec.js >> Client App Login
- Location: tests\ClientAppPO.spec.js:6:1

# Error details

```
Error: page.screenshot: Protocol error (Page.captureScreenshot): Unable to capture screenshot
Call log:
  - taking page screenshot
  - waiting for fonts to load...
  - fonts loaded

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
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
          - button " Cart" [ref=e20]:
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22] [cursor=pointer]:
          - button "Sign Out" [ref=e23]:
            - generic [ref=e24]: 
            - text: Sign Out
    - text:    
    - generic [ref=e25]:
      - paragraph [ref=e26]: Home | Search
      - heading "Filters" [level=4] [ref=e28]
      - generic [ref=e29]:
        - textbox "search" [ref=e31]
        - generic [ref=e32]:
          - heading "Price Range" [level=6] [ref=e33]
          - generic [ref=e34]:
            - textbox "Min Price" [ref=e36]
            - textbox "Max Price" [ref=e38]
        - generic [ref=e39]:
          - heading "Categories" [level=6] [ref=e40]
          - generic [ref=e42]: 
          - generic [ref=e43]:
            - checkbox [ref=e44]
            - generic [ref=e45]: fashion
          - generic [ref=e46]:
            - checkbox [ref=e47]
            - generic [ref=e48]: electronics
          - generic [ref=e49]:
            - checkbox [ref=e50]
            - generic [ref=e51]: household
        - generic [ref=e52]:
          - heading "Sub Categories" [level=6] [ref=e53]
          - generic [ref=e55]: 
          - generic [ref=e56]:
            - checkbox [ref=e57]
            - generic [ref=e58]: t-shirts
          - generic [ref=e59]:
            - checkbox [ref=e60]
            - generic [ref=e61]: shirts
          - generic [ref=e62]:
            - checkbox [ref=e63]
            - generic [ref=e64]: shoes
          - generic [ref=e65]:
            - checkbox [ref=e66]
            - generic [ref=e67]: mobiles
          - generic [ref=e68]:
            - checkbox [ref=e69]
            - generic [ref=e70]: laptops
        - generic [ref=e71]:
          - heading "Search For" [level=6] [ref=e72]
          - generic [ref=e74]: 
          - generic [ref=e75]:
            - checkbox [ref=e76]
            - generic [ref=e77]: men
          - generic [ref=e78]:
            - checkbox [ref=e79]
            - generic [ref=e80]: women
    - generic [ref=e81]:
      - generic [ref=e82]:
        - generic [ref=e83]:
          - generic [ref=e84]: Showing 3 results |
          - generic [ref=e85]: User can only see maximum 9 products on a page
        - generic [ref=e86]:
          - generic [ref=e88]:
            - img [ref=e89]
            - generic [ref=e90]:
              - heading "ADIDAS ORIGINAL" [level=5] [ref=e91]
              - generic [ref=e93]: $ 11500
              - button "View" [ref=e94] [cursor=pointer]:
                - generic [ref=e95]: 
                - text: View
              - button " Add To Cart" [ref=e96] [cursor=pointer]:
                - generic [ref=e97]: 
                - text: Add To Cart
          - generic [ref=e99]:
            - img [ref=e100]
            - generic [ref=e101]:
              - heading "ZARA COAT 3" [level=5] [ref=e102]
              - generic [ref=e104]: $ 11500
              - button "View" [ref=e105] [cursor=pointer]:
                - generic [ref=e106]: 
                - text: View
              - button " Add To Cart" [ref=e107] [cursor=pointer]:
                - generic [ref=e108]: 
                - text: Add To Cart
          - generic [ref=e110]:
            - img [ref=e111]
            - generic [ref=e112]:
              - heading "iphone 13 pro" [level=5] [ref=e113]
              - generic [ref=e115]: $ 55000
              - button "View" [ref=e116] [cursor=pointer]:
                - generic [ref=e117]: 
                - text: View
              - button " Add To Cart" [ref=e118] [cursor=pointer]:
                - generic [ref=e119]: 
                - text: Add To Cart
      - list "Pagination" [ref=e124]:
        - listitem [ref=e125]:
          - text: «
          - generic [ref=e126]:
            - text: Previous
            - generic [ref=e127]: page
        - listitem [ref=e128]:
          - generic [ref=e129]: You're on page
          - text: "1"
        - listitem [ref=e130]:
          - generic [ref=e131]:
            - text: Next
            - generic [ref=e132]: page
          - text: »
    - generic [ref=e133]: Design and Developed By - Kunal Sharma
  - generic "Login Successfully" [ref=e136]
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
  15  |        // const AddToCart = new AddToCart(page);
  16  |         loginPage.goTO();
  17  |         loginPage.validLogin(username,password);
  18  |         //AddToCart.ValidAddtoCart(productNames,productss);
> 19  |         await page.screenshot({path:'login.png'});
      |                    ^ Error: page.screenshot: Protocol error (Page.captureScreenshot): Unable to capture screenshot
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