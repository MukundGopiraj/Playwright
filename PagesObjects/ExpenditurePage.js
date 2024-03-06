const { expect } = require("@playwright/test");

exports.Expenditure = class Expenditure {

    constructor(page) {
        this.page = page;
        this.clickOnUploadBillButton = this.page.locator("//button[text()='Upload Bill']")
        this.selectExpenditure = this.page.locator('[name="expenditureType"]')
        this.descriptionText = this.page.locator('[name="description"]')
        this.dateInput = this.page.locator('[name="date"]')
        this.amountInput = this.page.locator('#amount')
        this.uploadButton = this.page.locator(".modal-container [type='file']")
        this.submitBtn = this.page.locator('.modal-container [type="submit"]')
        this.datePicker = this.page.locator('[type="text"]')

    }

    async clickOnUploadBill() {
        await this.page.waitForTimeout(2000)
        await this.clickOnUploadBillButton.click()
    }
    async verifyAddExpenditure(){
        const expentext =await this.page.getByText('Add Expenditure')
        expect(expentext).toBeTruthy()
    }
    async selectExpenditureType() {
        await this.selectExpenditure.selectOption('Team Lunch')
    }
    async enterDate() {
        await this.dateInput.fill('2024-12-02')
    }
    async enterAmount() {
        await this.amountInput.fill("25000")
    }
    async enterDescription() {
        await this.descriptionText.fill('team lunch bill details')
    }
    async clickUploadButton() {
        await this.page.waitForSelector(".modal-container [type='file']").click()
        let fileInput = await this.uploadButton
        await fileInput.setInputFiles('C:/Users/Admin/Desktop/dummy.pdf');
    }
    async clcikOnSubmitBtn(){
        await this.submitBtn.click()
    }
    async enterDateInput(dateinput){
        await this.datePicker.fill('dateinput')
    }
}