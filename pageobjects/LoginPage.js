class LoginPage{

    constructor(page){
        this.page = page;
        this.signInButton=  page.locator ("#login");
        this.userName = page.locator('#userEmail');
        this.password = page.locator("#userPassword");
    }
async goTO(){
    await this.page.goto("https://rahulshettyacademy.com/client");
    //await this.page.goTO("/client");
}
   async validLogin(username,password){

        
        await this.userName.fill(username);
        await this.password.fill(password);
        await this.signInButton.click();
        await this.page.waitForLoadState('networkidle');
    }
}
module.exports ={LoginPage};