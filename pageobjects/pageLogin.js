class pageLogin{

    constructor(page){
        this.page=this.page;
        this.username=page.locator ("#login");
        this.password=page.locator("#userPassword");
        this.signInButton=  page.locator ("#login");
    }

    async goTo(){
            await this.page.goto("https://rahulshettyacademy.com/client");
    }
    validLogin(username,password){
        await this.username.fill(username);
        await this.password.fill(passsword);
        await this.signInButton.click();
    
    }   
}
module.exports ={pageLogin};