
import { test } from '@playwright/test';
import { LoginPage } from '../PagesObjects/LoginUrbuddi'
import { HomePge } from '../PagesObjects/EmployeesPage';
import * as dataUtils from '../utilities/dataUtils'
import { Leavemanagement } from '../PagesObjects/LeaveManagement';
import { logout } from '../PagesObjects/LogountPage';
//const testdata = require('../tests/demo/fixtures/test-data.json');

// const empdata = require('../utilities/dataUtils')
const empDetails = dataUtils.employeeDetails();

test('HRlogin and create the emp', async ({ page }) => {
    //login urbuddi
    const login = new LoginPage(page);
    await login.lunchUrl("https://dev.urbuddi.com/login");
    // console.log("process email id is : "+process.env.HREMAI)
    await login.login("playwrightHR01@yopmail.com", "playwright@01");
    await login.clickOnLoginButoon()
    await login.verifyDashBoardHeaderDisplayed("Dashboard")
})

