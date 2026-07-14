const {test, expect} =require('@playwright/test')

test('handle frame', async ({page})=>{

    await page.goto('')
    const iframe = await page.frameLocator("//frame[@name='packageListFrame']")
    await iframe.locator("//a[text()='java.applet']").click() 
   // await page.pause()

    //await page.locator('//a[text()="java.applet"]').click();
   


})