const { expect } = require("@playwright/test");

exports.Leavemanagement = class Leavemanagement {

    constructor(page) {
        this.page = page;
        this.leavemanagementtext = this.page.locator("//p[text()='Leave Management']//parent::div");
        this.applyLeaveButton = this.page.locator("//button[text()='Apply Leave']");
        this.applyleavetext = this.page.locator(".modal-heading");
        this.fromDateInput = this.page.locator("#fromDate");
        this.toDateInput = this.page.locator('#toDate');
        this.selectLead = this.page.locator("[name='lead']")
        this.selectValue = this.page.locator()
        this.subjectInput = this.page.locator("[name='subject']");
        this.reasonLeaveInput = this.page.locator("[name='reason']");
        this.leaveRadioButton = this.page.getByLabel('Leave')
        this.submitButton = this.page.getByRole('button', { name: 'Submit' })
    }

    async verifyleaveMangementPge() {
        for (const leavemanage of ['Leave Management', 'Apply Leave']) 
        {
            const button = await this.page.getByRole('button', { name: leavemanage });
            // Check if the button exists and is visible
            // expect(button).not.toBeNull(); // Check if the button exists
            // expect(await button.isVisible()); // Check if the button is visible
        }
    }

    async leavemanagemtnt(lead) {
        //From Date
        const fromDate = new Date();
        const fromYear = fromDate.getFullYear();
        const fromMonth = String(fromDate.getMonth() + 1).padStart(2, '0'); // January is 0, so we add 1
        const fromDay = String(fromDate.getDate()).padStart(2, '0');

        const from_Date = `${fromYear}-${fromMonth}-${fromDay}`;
        console.log(from_Date);


        //ToDate
        const today = new Date();
        const futureDate = new Date(today);
        futureDate.setDate(today.getDate() + 5);

        const year = futureDate.getFullYear()
        const month = String(futureDate.getMonth() + 1).padStart(2, '0'); // January is 0, so we add 1
        const day = String(futureDate.getDate()).padStart(2, '0');

        const futureDateString = `${year}-${month}-${day}`;
        console.log(futureDateString);



        await this.fromDateInput.fill(from_Date)
        await this.toDateInput.fill(futureDateString)
        await this.page.waitForTimeout(5000)
        await this.selectLead.selectOption(lead)
        await this.subjectInput.fill("brother marriage")
        await this.reasonLeaveInput.fill("brother marriage")
        await this.leaveRadioButton.check()
        await this.submitButton.click()

    }




}



