const { expect } = require("@playwright/test");

exports.leadIdDetails = class LeadPage {

    constructor(page) {
        this.page = page;
        this.employeesTab = this.page.locator("//p[text()='Employees']")
        this.addEmployeeButton = this.page.getByRole('button', { name: 'Add Employee' })
        this.leadfirstNameInput = this.page.locator("input[name='firstName']")
        this.leadlastNameInput = this.page.locator("input[name='lastName']")
        this.leademployeeIdinput = this.page.locator("#employeeID")
        this.leademailIDInput = this.page.locator("input[name='email']")
        this.leadroleSelectOption = this.page.locator("#role")
        this.leadpasswordInputfield = this.page.locator("input[name='password']")
        this.leaddobInput = this.page.locator("input[name='dob']")
        this.leadjoiningDateInput = this.page.locator("input[name='joiningDate']")
        this.leadselectQualification = this.page.locator("#qualifications")
        this.leaddepartmentInput = this.page.locator("input[name='department']")
        this.leadselectGender = this.page.locator("#gender")
        this.leadmobileNumberInput = this.page.locator("input[name='mobileNumber']")
        this.leadselectBloodGroup = this.page.locator("#bloodGroup")
        this.leaddesignationInput = this.page.locator("[name='designation']")
        this.leadlocationInput = this.page.locator("input[name='location']")
        this.leadselectReportingTo = this.page.locator("#reportingTo")
        this.leadcertificateButton = this.page.locator("button[class='dropdown-btn']")
        this.leadaddButoon = this.page.locator('.modal-container [type="submit"]')
        this.leadempemaiFilterInput = this.page.locator("[aria-label='aria-label='EMAIL Filter Input']")
        this.leadfilteringName = this.page.locator("[aria-label='Press SPACE to select this row.'] [col-id='fullName']")
        this.toastMessage = this.page.locator('[aria-live="polite"]')
    }
    async createLeadNamesDetails(leadFirstName,leadLasttName) {
        await this.page.waitForTimeout(5000)
        await this.leadfirstNameInput.fill(leadFirstName)
        await this.leadlastNameInput.fill(leadLasttName)
    }
    async leadIdDetails(leadId,leadEmail) {
        await this.leademployeeIdinput.fill(leadId)
        await this.leademailIDInput.fill(leadEmail)
    }
    async leadSelectOptions() {
        await this.leadroleSelectOption.selectOption("Lead");
        await this.leadselectGender.selectOption("Male");
        await this.leadselectQualification.selectOption("PG");


        await this.leadselectReportingTo.selectOption("vikas.voladri@optimworks.com");
    }
    async leadEnterPassword(leadPassword) {
        await this.leadpasswordInputfield.fill(leadPassword);
    }
    async leadEnterDatefiels() {
        await this.leaddobInput.fill('1995-08-22');
        await this.leadjoiningDateInput.fill('2016-08-21');
    }
    async enterLeadDepField() {
        await this.leaddepartmentInput.fill("testing");
    }
    async enterLeadGenderField() {
        await this.leadselectGender.selectOption("Male");

    }
    async leadMobileNumberField() {
        await this.leadmobileNumberInput.fill("8099997949");
    }
    async leadSelectBloodGroop() {
        await this.leadselectBloodGroup.selectOption("O+");

    }
    async enterleadLocation() {
        await this.leaddesignationInput.fill("testing");
        await this.leadlocationInput.fill("Hyderabad");
    }
    async clickonAddButton(){
        await this.page.waitForTimeout(2000)
        await this.leadaddButoon.click()
        const element = await this.page.waitForSelector("//*[@class='all-employees-page']//div[text()='Saved Successfully']");        
        const tostmessage = await element.textContent();
        console.log("Lead created success message : ",tostmessage)
        expect(tostmessage).toContain('Saved Successfully');
        
    }
}





