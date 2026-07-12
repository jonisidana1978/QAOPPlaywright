# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ClientAppPO.spec.js >> Client App Login
- Location: tests\ClientAppPO.spec.js:6:1

# Error details

```
ReferenceError: expect is not defined
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
  - alert "Product Added To Cart" [ref=e56]
```

# Test source

```ts
  1  | class AddToCart {
  2  | 
  3  |     constructor(page) {
  4  |         this.page = page;
  5  |         this.productName = 'ADIDAS ORIGINAL';
  6  |         this.products = page.locator(".card-body");
  7  |     }
  8  | 
  9  |     async ValidAddtoCart(productName,products){
  10 |         const count = await this.products.count();
  11 | 
  12 |         for (let i = 0; i < count; i++) {
  13 |             const title = await this.products.nth(i).locator("b").textContent();
  14 | 
  15 |             if (title === this.productName) {
  16 |                 await this.products
  17 |                     .nth(i)
  18 |                     .locator("text=Add To Cart")
  19 |                     .click();
  20 |                 break;
  21 |             }
  22 |         }
  23 | 
  24 |         await this.page.locator("[routerlink*='cart']").click();
  25 |         await this.page.locator("div li").first().waitFor();
  26 | 
  27 |         const isVisible = await this.page
  28 |             .locator("h3:has-text('ADIDAS ORIGINAL')")
  29 |             .isVisible();
  30 | 
> 31 |         expect(isVisible).toBeTruthy();
     |         ^ ReferenceError: expect is not defined
  32 | 
  33 |         await this.page.locator("text=Checkout").click();
  34 |     }
  35 | }
  36 | 
  37 | module.exports = { AddToCart };
```