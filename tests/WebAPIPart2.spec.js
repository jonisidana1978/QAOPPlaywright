const {request,test,expect}= require('@playwright/test');
const loginPayLoad= {userEmail: "pallavsidana@yahoo.com",
    userPassword:"Sidana@10"
};
const {ApiUtils} = require('../utils/APiUtils');
let orderId;
const orderPayLoad= {orders:[{country:"Cuba",productOrderedId:"6960eac0c941646b7a8b3e68"}]};
let token;
//login API call and get the token and store it in a variable
let response;
test.beforeAll(async () => {
    const apiContext = await request.newContext();
    const apiUtils = new ApiUtils(apiContext,loginPayLoad);
    response = await apiUtils.crearteOrder(orderPayLoad);
    token = response.token;
    orderId = response.orderId;
    //token = await APiUtils.getToken();
   // const orderResponse = await APiUtils.crearteOrder(token);
   // const orderResponseJson = await orderResponse.json();
   // console.log(orderResponseJson);
   // orderId = orderResponseJson.orders[0];
});

test('@API Place the order', async ({page})=>
    {
        //added for refactor
        await page.addInitScript(value => {
        window.localStorage.setItem('token', value);
        }, token);
        await page.goto("https://rahulshettyacademy.com/client");
    //click on the order button
await page.locator("button[routerlink*='myorders']").click();
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
        break;
        }
  const OrderIdDetails = await page.locator(".col-text").textContent();
//console.log(OrderIdDetails);
expect(orderId.includes(OrderIdDetails)).toBeTruthy();
}
});

//verify if the order created is present in the order history page
//precondition: create order
