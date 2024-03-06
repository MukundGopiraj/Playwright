
import { test } from '@playwright/test';
import { LoginPage } from '../PagesObjects/LoginUrbuddi'
import { Expenditure } from '../PagesObjects/ExpenditurePage'
import * as dataUtils from '../utilities/dataUtils'

//const testdata = require('../tests/demo/fixtures/test-data.json');

// const empdata = require('../utilities/dataUtils')
const empDetails = dataUtils.employeeDetails();

test('HRlogin and create the emp', async ({ page }) => {
    //login urbuddi
    const login = new LoginPage(page);
    await login.lunchUrl("https://dev.urbuddi.com/login");


    const exp = new Expenditure(page)
    await login.login("playwrightHR01@yopmail.com", "playwright@01");
    await login.clickOnLoginButoon()
    await login.verifyDashBoardHeaderDisplayed("Dashboard")
    await login.clickOnMainMenu('Expenditure')
    await exp.clickOnUploadBill()
    await exp.verifyAddExpenditure()
    await exp.selectExpenditureType()
    await exp.enterDate()
    await exp.enterAmount()
    await exp.enterDescription()
    await exp.clickUploadButton
    await exp.clcikOnSubmitBtn()
    await exp.dateInput("December 2024")
})
