/**
 * Page object for the dashboard screen.
 * It contains helpers for finding products and navigating to the cart.
 */
class DashboardPage {
    constructor(page) {
        this.products = page.locator('.card-body');
        this.productsText = page.locator('.card-body b');
        this.cart = page.locator("[routerlink*='cart']");
    }

    /**
     * Finds a product by name and clicks the Add To Cart button for that item.
     * @param {string} productName - Name of the product to add.
     */
    async searchProductAddCart(productName) {
        const titles = await this.productsText.allTextContents();
        console.log(titles);

        const count = await this.products.count();
        for (let i = 0; i < count; i++) {
            if (await this.products.nth(i).locator('b').textContent() === productName) {
                await this.products.nth(i).locator('text= Add To Cart').click();
                break;
            }
            
        }
    }

    /**
     * Opens the shopping cart from the dashboard.
     */
    async navigateToCart() {
        await this.cart.click();
    }
}

module.exports = { DashboardPage };