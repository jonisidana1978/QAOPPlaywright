class AddToCart {

    constructor(page) {
        this.page = page;
        this.productNames = 'ZARA COAT 3';
        this.products = page.locator(".card-body");
        this.cart=page.locator("[routerlink*='cart']");
    }

    async ValidAddtoCart(productNames,products){
        const count = await this.products.count();

        for (let i = 0; i < count; i++) {
            const title = await this.products.nth(i).locator("b").textContent();

            if (title === this.productNames) {
                await this.products
                    .nth(i)
                    .locator("text=Add To Cart")
                    .click();
                break;
            }
        }

        await this.cart.click();
        await this.page.locator("div li").first().waitFor();

        const isVisible = await this.page
            .locator("h3:has-text('ZARA COAT 3')")
            .isVisible();

//      expect(isVisible).toBeTruthy();
        await this.page.locator("text=Checkout").click();
    }
}

module.exports = { AddToCart };