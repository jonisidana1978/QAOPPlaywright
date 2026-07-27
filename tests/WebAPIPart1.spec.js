const {request,test,expect}= require('@playwright/test');
const url="https://rahulshettyacademy.com/api/ecom/auth/login";
const orderURL="https://rahulshettyacademy.com/api/ecom/order/create-order";
const loginPayLoad= {userEmail: "pallavsidana@yahoo.com",
    userPassword:"Sidana@10"
};

let orderId;
const OrderPayLoad= {orders:[{country:"Cuba",productOrderedId:"6960eac0c941646b7a8b3e68"}]};
let token;
//login API call and get the token and store it in a variable


test.beforeAll(async () => {
    const apiContext = await request.newContext();
    const loginResponse = await apiContext.post(url,{
        data: loginPayLoad
    });
    expect(loginResponse.ok()).toBeTruthy();
    const loginResponseJson = await loginResponse.json();
    token = loginResponseJson.token;
    const orderResponse = await apiContext.post(
       orderURL,
        {
            data: OrderPayLoad,
            headers: {
                Authorization: token,
                "Content-Type": "application/json"
            }
        }
    );

    const orderResponseJson = await orderResponse.json();

    console.log(orderResponseJson);

    orderId = orderResponseJson.orders[0];
});

test.beforeEach(async()=>{
});

test('Place the order', async ({page})=>
    {
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
        //await row.locator("button.btn.btn-primary").click();
       // await page.locator("tr:has-text"('" + orderId + "'),button.btn.btn-primary).click();
        break;
        }
  const OrderIdDetails = await page.locator(".col-text").textContent();
//console.log(OrderIdDetails);
//await page.pause();
expect(orderId.includes(OrderIdDetails)).toBeTruthy();
}

});

test.afterAll(async()=>{
   // context.close();
    //page.close();
})


//verify if the order created is present in the order history page
//precondition: create order
