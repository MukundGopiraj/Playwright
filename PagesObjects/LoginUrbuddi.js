const { expect } = require("@playwright/test");

exports.LoginPage = class LoginPage {

    constructor(page) {
        this.page = page;
        this.emailInput = this.page.locator('#userEmail')
        this.passwordInput = this.page.locator('#userPassword')
        this.loginButton = this.page.locator("//button[normalize-space()='Login']")
        this.dashboardText = this.page.locator("//div[contains(@class,'container')]/child::p[text()='Dashboard']")
        
    }

    async lunchUrl(URBUDDIURL) {
        await this.page.goto(URBUDDIURL);
        await expect(this.page).toHaveURL(URBUDDIURL);
        
    }

    async login(emailid, password,) {

        await this.emailInput.fill(emailid, {delay : 100});
        await this.passwordInput.fill(password,{delay : 100});
    
    }
    async clickOnLoginButoon()
    {
        await this.page.waitForTimeout(4000)
        await this.page.getByRole('button', { name: 'Login'}).click();
        console.log("Login Succefully")

    }
    async verifyDashBoardHeaderDisplayed(Dashboard){
        const dashboardtxt = await this.dashboardText
        await expect(dashboardtxt).toHaveText(Dashboard)
    }

    async clickOnMainMenu(menu) {
        await this.page.getByRole('link',{name: menu}).first().click();
    }

    async clickOnButton(clickbutton){
        await this.page.waitForTimeout(5000)
        await this.page.getByRole('button',{name: clickbutton}).click()
    }
}


    

