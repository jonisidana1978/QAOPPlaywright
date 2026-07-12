const { text } = require("node:stream/consumers");

class checkOutPage{

    constructor(page){
        this.page=page;
        this.text1 =page.locator("div li").first();
        this.checkoutText= page.locator("text=Checkout");
        this.country =page.locator("[placeholder*='Country']");
    }

async checkout(text1,checkoutText){
    await this.text1.waitFor();
//const bool = await page.locator("h3:has-text('ADIDAS ORIGINAL')").isVisible();
//expect (bool).toBeTruthy();
await this.checkoutText.click();
await page.locator("input[type='text'].input.txt").nth(1).fill("123");

const value = await page.locator("input[type='text'].input.txt").nth(1).inputValue();

console.log(value);


await page.locator("input[type='text'].input.txt").nth(2).fill("Rahul");

const value1 = await page.locator("input[type='text'].input.txt").nth(2).inputValue();

console.log(value1);
await this.country.pressSequentially("Ind",{delay:1000});
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
}

}

module.exports={checkOutPage};

