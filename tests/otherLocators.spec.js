

const {test,except, expect}=require("@playwright/test");

test.only("other locators",async({page})=>{
    const email="pallavsidana@yahoo.com";
    const pwd="Sidana@10";
    await page.goto("https://rahulshettyacademy.com/client");
    await page.getByPlaceholder("email@example.com").fill(email);
    await page.getByPlaceholder("enter your passsword").fill(pwd);
    await page.getByRole("button", {name:'Login'}).click();
    //await page.waitForLoadState('networkidle');
    await page.locator('.card-body').first().waitFor();
    await page.locator('.card-body').filter({hasText:'ADIDAS ORIGINAL'})
    .getByRole("button",{name:"Add to Cart"}).click();
    await page.getByRole("ListItem").getByRole("Button", {name:'Cart'}).click();
   // await page.locator('div liv').first().waitFor();
    const value1=await expect(page.getByText("ADIDAS ORIGINAL")).toBeVisible();
    console.log(value1);
});