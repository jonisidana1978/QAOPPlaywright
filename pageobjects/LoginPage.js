/**
 * Page object for the login screen of the client application.
 * It centralizes the locators and actions needed to sign in.
 */
class LoginPage {
    constructor(page) {
        this.page = page;
        this.signInButton = page.locator('#login');
        this.userName = page.locator('#userEmail');
        this.password = page.locator('#userPassword');
    }

    /**
     * Opens the application home page.
     */
    async goTo() {
        await this.page.goto('https://rahulshettyacademy.com/client');
    }

    /**
     * Alias for goTo to keep the test API simple.
     */
  async goTO() {
      await this.goTo();
   }

    /**
     * Signs in to the application using the supplied credentials.
     * @param {string} username - Registered email address.
     * @param {string} password - Account password.
     */
    async validLogin(username, password) {
        await this.userName.fill(username);
        await this.password.fill(password);
        await this.signInButton.click();
        await this.page.waitForLoadState('networkidle');
    }
}

module.exports = { LoginPage };