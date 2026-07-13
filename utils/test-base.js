 const base = require('@playwright/test');
 exports.customtest = base.test.extend({
    testDataForOrder:{
        username:"pallavsidana@yahoo.com",
        password:"Sidana@10",
        productNames:"ZARA COAT 3"
    }
})