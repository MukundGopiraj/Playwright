import { test } from '@playwright/test';
import { LoginPage } from '../PagesObjects/LoginUrbuddi';
import { EmployeesMenu } from '../PagesObjects/EmployeesPage';
import { leadIdDetails } from '../PagesObjects/CreateLead';
import * as dataUtils from '../utilities/dataUtils'
import { Leavemanagement } from '../PagesObjects/LeaveManagement';
import { logout } from '../PagesObjects/LogountPage';
// const testdata = require('../tests/demo/fixtures/test-data.json');

const empdata = require('../utilities/dataUtils')
const empDetails = dataUtils.employeeDetails();

    test('Login the HR and create the emp', async ({ page }) => {
        //login urbuddi
        const empDetails = dataUtils.employeeDetails();
        const login = new LoginPage(page);
        const leave = new Leavemanagement(page)
        const employees = new EmployeesMenu(page)
        await login.lunchUrl("https://dev.urbuddi.com/login");
        await login.login("playwrightHR01@yopmail.com", "playwright@01");
        await login.clickOnLoginButoon();
        await login.verifyDashBoardHeaderDisplayed("Dashboard")
        await login.clickOnMainMenu('Employees');
        await employees.verifyEmployeesHeaderTxtdisplyed("Dashboard");
        await employees.clickOnEmployeeButton('Add Employee');
        await employees.addEmployee(empDetails.empid.toString(), empDetails.emailEmp, empDetails.empass)
        await employees.selectReporting()
        await employees.clickAddButton()
        console.log("Employee the emailID : ", empDetails.emailEmp)
        console.log("Employee Password: ", empDetails.empass)
    
        const logouthr = new logout(page)
        await logouthr.logout()
    })

 

