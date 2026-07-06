const {test,expect}= require('@playwright/test');
const url="https://rahulshettyacademy.com/angularpractice/";
test ('Playwright Special Locators',async ({page})=>{

await page.goto(url);
//label
await page.getByLabel("Check me out if you Love IceCreams!").click();
//radio
await page.getByLabel("Employed").click();
await page.getByLabel("Student").check();
await page.getByLabel("Gender").selectOption("Female");
//getBylaceholder()
await page.getByPlaceholder("Password").fill("abd");
//getbyRole() this method what it does alert,checkbox, document, button etc
await page.getByRole("button",{name:"submit"}).click();
//getbyText()
const message=await page.getByText("Success! The Form has been submitted successfully!.").isVisible;
//expect(await page.locator(message)).toBeTruthy());
await page.getByRole("link",{name:"Shop"}).click();

//locator.filter()returm the lists of elements //has, hasText,hasNot, hasNotText,
await page.locator("app-card").filter({hasText:'Nokia Edge'}).getByRole("button",{name:"Add"}).click();
await page.locator("app-card").filter({hasText:'Samsung Note 8'}).getByRole("button",{namee:'Add'}).click();

page.pause(10000);
});