/**
 * Central manager for page object instances.
 * It exposes easy access to the login and dashboard pages used by the tests.
 */
const { LoginPage } = require('./LoginPage');
const { DashboardPage } = require('./DashboardPage');

class POManager {
    constructor(page) {
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.dashboardPage = new DashboardPage(this.page);
    }

    /**
     * Returns the login page object.
     */
    getLoginPage() {
        return this.loginPage;
    }

    /**
     * Returns the dashboard page object.
     */
    getDashboardPage() {
        return this.dashboardPage;
    }
}

module.exports = { POManager };