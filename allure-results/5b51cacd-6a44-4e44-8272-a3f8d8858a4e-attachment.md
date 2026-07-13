# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ClientAppPO.spec.js >> Client app for login
- Location: tests\ClientAppPO.spec.js:62:12

# Error details

```
Error: page.waitForLoadState: Target page, context or browser has been closed
```

# Test source

```ts
  1  | /**
  2  |  * Page object for the login screen of the client application.
  3  |  * It centralizes the locators and actions needed to sign in.
  4  |  */
  5  | class LoginPage {
  6  |     constructor(page) {
  7  |         this.page = page;
  8  |         this.signInButton = page.locator('#login');
  9  |         this.userName = page.locator('#userEmail');
  10 |         this.password = page.locator('#userPassword');
  11 |     }
  12 | 
  13 |     /**
  14 |      * Opens the application home page.
  15 |      */
  16 |     async goTo() {
  17 |         await this.page.goto('https://rahulshettyacademy.com/client');
  18 |     }
  19 | 
  20 |     /**
  21 |      * Alias for goTo to keep the test API simple.
  22 |      */
  23 |     async goTO() {
  24 |         await this.goTo();
  25 |     }
  26 | 
  27 |     /**
  28 |      * Signs in to the application using the supplied credentials.
  29 |      * @param {string} username - Registered email address.
  30 |      * @param {string} password - Account password.
  31 |      */
  32 |     async validLogin(username, password) {
  33 |         await this.userName.fill(username);
  34 |         await this.password.fill(password);
  35 |         await this.signInButton.click();
> 36 |         await this.page.waitForLoadState('networkidle');
     |                         ^ Error: page.waitForLoadState: Target page, context or browser has been closed
  37 |     }
  38 | }
  39 | 
  40 | module.exports = { LoginPage };
```