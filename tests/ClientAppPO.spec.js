const { test, expect } = require('@playwright/test');
const { only } = require('node:test');


const {POManager} = require('../pageobjects/POManager');
// converted the json to object ( javascript object)
// parse this json to javascript object
//convert the json into string and then convert to java object
//json->String-> js object
//json is class
const dataSet = JSON.parse(JSON.stringify(require('../utils/placeorderTestData.json')));
test('Client App Login', async ({page})=>

    {
       const poManager =new POManager(page);

      
        const productss = page.locator(".card-body");
        const cart =page.locator("[routerlink*='cart']")
        const loginPage = poManager.getLoginPage();
        await loginPage.goTO();
        await loginPage.validLogin(dataSet.username,dataSet.password);
        const dashboardPage = poManager.getDashboardPage();
        await dashboardPage.searchProductAddCart(dataSet.productNames);
        await dashboardPage.navigateToCart();
       // await page.locator("div li").first().waitFor();
      //  const bool = await page.locator("h3:has-text('ADIDAS ORIGINAL')").isVisible();
       // expect (bool).toBeTruthy();
        await page.locator("text=Checkout").click();
        await page.locator("input[type='text'].input.txt").nth(1).fill("123");

        const value = await page.locator("input[type='text'].input.txt").nth(1).inputValue();

        console.log(value);


        await page.locator("input[type='text'].input.txt").nth(2).fill("Pallav Sidana");

        const value1 = await page.locator("input[type='text'].input.txt").nth(2).inputValue();

        console.log(value1);
        await page.locator("[placeholder*='Country']").pressSequentially("Ind",{delay:1000});
        const dropdown = await page.locator(".ta-results");
        await dropdown.waitFor();
        const optionCounts=await dropdown.locator("button").count();
        for (let i=0;i<optionCounts;++i){
            const text=await  dropdown.locator("button").nth(i).textContent();
            if (text ===" India"){
                await dropdown.locator("button").nth(i).click();
                break;
            }
        }

        await page.locator(".action__submit").click();
        expect(await page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
        const orderId=await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
        console.log(orderId);

        //click on the order button
        await page.locator("button[routerlink*='myorders']").click();
        //await page.locator("tbody").waitFor();

        //consider the first row scan the order in the table 
        const rows=await page.locator("tbody tr");

        // using for loop traverse the table
        for (let i=0;i<await rows.count();++i)
            {
                const rowOrderId= await rows.nth(i).locator("th").textContent();
                if (orderId.includes(rowOrderId))
                    {
                        // to select the view button 
                        await rows.nth(i).locator("button").first().click();
                        //await row.locator("button.btn.btn-primary").click();
                        // await page.locator("tr:has-text"('" + orderId + "'),button.btn.btn-primary).click();
                        break;
                    }
        //console.log(print);
        await page.pause();

        const OrderIdDetails = await page.locator(".col-text").textContent();
        console.log(OrderIdDetails);
        expect(orderId.includes(OrderIdDetails)).toBeTruthy();
    }
    //const OrderIdDetails = await page.locator(".col-text").textContent();
    //console.log(OrderIdDetails);
    //expect(orderId.includes(OrderIdDetails)).toBeTruthy();

});