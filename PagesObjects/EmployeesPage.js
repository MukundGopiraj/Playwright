const { expect } = require("@playwright/test");

exports.EmployeesMenu = class EmployeesMenu {

    constructor(page) {
        this.page = page;
        this.employeesTab = this.page.locator("//p[text()='Employees']")
        this.addEmployeeButton = this.page.locator("//button[text()='Add Employee']")
        this.firstNameInput = this.page.locator("input[name='firstName']")
        this.lastNameInput = this.page.locator("input[name='lastName']")
        this.employeeIdinput = this.page.locator("#employeeID")
        this.emailIDInput = this.page.locator("input[name='email']")
        this.roleSelectOption = this.page.locator("#role")
        this.passwordInputfield = this.page.locator("input[name='password']")
        this.dobInput = this.page.locator("input[name='dob']")
        this.joiningDateInput = this.page.locator("input[name='joiningDate']")
        this.selectQualification = this.page.locator("#qualifications")
        this.departmentInput = this.page.locator("input[name='department']")
        this.selectGender = this.page.locator("#gender")
        this.mobileNumberInput = this.page.locator("input[name='mobileNumber']")
        this.selectBloodGroup = this.page.locator("#bloodGroup")
        this.designationInput = this.page.locator("[name='designation']")
        this.locationInput = this.page.locator("input[name='location']")
        this.selectReportingTo = this.page.locator("#reportingTo")
        this.certificateButton = this.page.locator("button[class='dropdown-btn']")

        this.addButoon = this.page.locator('.modal-container [type="submit"]')
        this.empemaiFilterInput = this.page.locator("[aria-label='aria-label='EMAIL Filter Input']")
        this.filteringName = this.page.locator("[aria-label='Press SPACE to select this row.'] [col-id='fullName']")
        this.toastMessage = this.page.locator("//*[@class='all-employees-page']//div[text()='Saved Successfully']")
    }


    async verifyEmployeesHeaderTxtdisplyed() {
        for (const empbutton of ['Import Excel Sheet', 'Export Data', 'Add Employee', 'Active', 'Released']) {
            const button = await this.page.getByRole('button', { name: empbutton });
            await expect(button).toBeVisible();

        }

    }
    async clickOnEmployeeButton(buttonName) {
        await this.page.getByRole('button', { name: buttonName }).click()

    }

    async addEmployee(empid, empemail, empass) {
        await this.page.waitForLoadState("networkidle");
        await this.firstNameInput.fill("asdf");
        await this.lastNameInput.fill("qwert");
        await this.employeeIdinput.fill(empid);
        await this.emailIDInput.fill(empemail);
        await this.roleSelectOption.selectOption("Employee");
        await this.passwordInputfield.fill(empass);
        await this.dobInput.fill('1995-08-22');
        await this.joiningDateInput.fill('2016-08-21');
        await this.selectQualification.selectOption("PG");
        await this.departmentInput.fill("testing");
        await this.selectGender.selectOption("Male");
        await this.mobileNumberInput.fill("8099997949");
        await this.selectBloodGroup.selectOption("O+");
        await this.designationInput.fill("testing");
        await this.locationInput.fill("Hyderabad");
    }
    async selectReporting(reporting) {
        await this.selectReportingTo.click();
        const options = await this.page.locator('option').elements();
        for (const option of options) {
            const text = await option.innerText();
            if (text.trim() === reporting) {
                await option.click();
                return;
            }
        }
        console.error(`Option with text '${reporting}' not found.`);
    }
    

    async clickAddButton() {
        await this.page.waitForTimeout(5000)
        await this.addButoon.click()
        const element = await this.page.waitForSelector("//*[@class='all-employees-page']//div[text()='Saved Successfully']");
        const tostmessage = await element.textContent();
        console.log(tostmessage)
        expect(tostmessage).toContain('Saved Successfully');
    }

    async checkEmployee(empemail) {
        await this.page.locator(this.employeesTab).click()
        await this.page.waitForTimeout(3000);
        await this.page.locator(this.empemaiFilterInput).click()
        await this.page.locator(this.empemaiFilterInput).fill(empid)
    }

}



