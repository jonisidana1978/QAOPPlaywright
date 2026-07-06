const {except,test} = require('@playwright/test');
const { allure } = require('allure-playwright');
test("calender", async({page})=>{
const url="https://rahulshettyacademy.com/seleniumPractise/#/offers";
const month = "6";
const date  = "15";
const year  = "2027";
const expectedList = [month,date,year];

await page.goto(url);
await page.locator(".react-date-picker__inputGroup").click();
await page.locator(".react-calendar__navigation__label").click();
await page.locator(".react-calendar__navigation__label").click();
await page.getByText(year).click();
await page.locator(".react-calendar__year-view__months__month").nth(Number(month)-1).click();
//await page.locator(".react-calendar__year-view__months__month").waitFor();
await page.locator("//abbr[text()='"+date+"']").click();
const inputs=page.locator('.react-date-picker__inputGroup__input');
console.log(inputs);
for (let i=0; i<expectedList; i++)
{
    const result=await inputs.nth(i).inputValue();
    expect(result).toEqual(expectedList[i]);
    //console.log(result);
}
});
