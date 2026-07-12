// keep all the object of all the class

const {LoginPage} = require('./LoginPage');
const {DashboardPage} = require('./DashboardPage');

class POManager{
    constructor(page){
           this.page=page;
           this.loginPage = new LoginPage(this.page);
           this.dashboardPage = new DashboardPage(this.page);

    }
//custom methods
getLoginPage(){
    return this.loginPage;
}
getDashboardPage(){
    return this.dashboardPage;
}

}
module.exports={POManager};