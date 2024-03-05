const { expect } = require("@playwright/test");

exports.logout = class logout{

    constructor(page)
    {
        this.page = page;
        this.logoutButton  = this.page.locator("//p[text()='Logout']");
        this.yesButton = this.page.locator("//button[text()='Yes']");
    }
    async logout() {
        try {
            
            await this.logoutButton.click();
            
            await this.yesButton.click();
            console.log("Successfully logged out.");
        } catch (error) {
            console.error("Error occurred during logout:", error);
            // Handle the error as per your requirement
            throw error; // Re-throw the error to notify the caller
        }
    }

}