const {test,expect,request}= require("@playwright/test");
 

const loginPayLoad={"userEmail":"pallavsidana@yahoo.com","userPassword":"Sidana@10"};



test.beforeAll(()=>
{   
    const apiContext =await request.newContext();
    apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
        {
            data:loginPayLoad
        }
    );





})

test.beforeEach(()=>
{

})