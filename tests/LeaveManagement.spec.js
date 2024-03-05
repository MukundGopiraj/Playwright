import {test} from '@playwright/test'
import { LoginPage } from '../PagesObjects/LoginUrbuddi'
import { EmployeesMenu } from '../PagesObjects/EmployeesPage';
import * as dataUtils from '../utilities/dataUtils'
import { Leavemanagement } from '../PagesObjects/LeaveManagement';
import { logout } from '../PagesObjects/LogountPage';
//const testdata = require('../tests/demo/fixtures/test-data.json');


// const empdata = require('../utilities/dataUtils')
const empDetails = dataUtils.employeeDetails();


test('Login the HR and create the emp', async ({ page }) => {
    //login urbuddi
    const login = new LoginPage(page);
    await login.lunchUrl("https://dev.urbuddi.com/login");
    await login.login("playwrightHR01@yopmail.com", "playwright@01");
    await login.clickOnLoginButoon();
    await login.verifyDashBoardHeaderDisplayed("Dashboard")
    const Employees = new EmployeesMenu(page)
    await login.clickOnMainMenu('Employees');
    await Employees.verifyEmployeesHeaderTxtdisplyed();
    await Employees.clickOnEmployeeButton('Add Employee');
    await Employees.addEmployee(empDetails.empid.toString(), empDetails.emailEmp, empDetails.empass)
    await page.waitForTimeout(10000)


    // await login.clickOnButton('Add')
    

    console.log(empDetails.emailEmp)

    const logouthr = new logout(page)
    await logouthr.logout()
})


// })
test('login the employee and apply leave', async ({ page }) => {
    //login urbuddi
    const login = new LoginPage(page);
    await login.lunchUrl("https://dev.urbuddi.com/login");
    await login.login(empDetails.emailEmp, empDetails.empass);
    console.log("LOgin the Email",empDetails.emailEmp)
    console.log("Login the emppass",empDetails.empass)
    await login.clickOnLoginButoon()
    const leave = new Leavemanagement(page)
    await page.waitForTimeout(2000)
    await login.clickOnMainMenu('Leave Management')
    await leave.verifyleaveMangementPge()
    await page.waitForTimeout(2000)
    await login.clickOnButton('Apply Leave')
    await leave.leavemanagemtnt()
    const logouthr = new logout(page)
    await logouthr.logout()
})
