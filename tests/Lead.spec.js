
import { test } from '@playwright/test';
import { LoginPage } from '../PagesObjects/LoginUrbuddi';
import { EmployeesMenu } from '../PagesObjects/EmployeesPage';
import { leadIdDetails } from '../PagesObjects/CreateLead';
import * as dataUtils from '../utilities/dataUtils'
import { Leavemanagement } from '../PagesObjects/LeaveManagement';
import { logout } from '../PagesObjects/LogountPage';
// const testdata = require('../tests/demo/fixtures/test-data.json');\

const empdata = require('../utilities/dataUtils')

// let context;
// let login;

// test.describe.configure({ mode: 'serial' });

test.describe("add-on -> item displayed in cart", () => {
    let leadMail, leadPass

    test.beforeAll(async () => {
    });

    test.afterAll(async () => {
        await page.close();
    });




    test('Login the HR and create the Lead', async ({ page }) => {
        //login urbuddi
        const empDetails = dataUtils.employeeDetails();
        const login = new LoginPage(page);
        const employees = new EmployeesMenu(page)
        const lead = new leadIdDetails(page)
        const logouthr = new logout(page)

        await login.lunchUrl("https://dev.urbuddi.com/login");
        await login.login("playwrightHR01@yopmail.com", "playwright@01");
        await login.clickOnLoginButoon();
        await login.verifyDashBoardHeaderDisplayed("Dashboard")

        login.clickOnMainMenu('Employees')
        await employees.verifyEmployeesHeaderTxtdisplyed("Dashboard");
        await employees.clickOnEmployeeButton('Add Employee');
        await page.waitForTimeout(5000)
        await lead.createLeadNamesDetails("ram", "Laxman")
        await lead.leadIdDetails(empDetails.lead_Id.toString(), empDetails.lead_Email)
        leadMail = empDetails.lead_Email
        console.log("Lead emailID : ", leadMail)
        await lead.leadSelectOptions()
        await lead.leadEnterPassword(empDetails.lead_Password)
        leadPass = empDetails.lead_Password
        console.log("Lead password : ", leadPass)
        await lead.leadEnterDatefiels()
        await lead.enterLeadDepField()
        await lead.enterLeadGenderField()
        await lead.leadMobileNumberField()
        await lead.leadSelectBloodGroop()
        await lead.enterleadLocation()
        await lead.clickonAddButton()
        await logouthr.logout()
    })


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
        await employees.selectReporting(leadMail)
        await employees.clickAddButton()
        const empemail = empDetails.emailEmp
        const emppass = empDetails.empass

        console.log("Employee the emailID : ", empemail)
        console.log("Employee Password: ", emppass)

        //apply the leave
        await login.clickOnMainMenu("Leave Management")
        await leave.verifyleaveMangementPge()
        await login.clickOnButton("Apply Leave")
        await leave.leavemanagemtnt(leadMail)

        const logouthr = new logout(page)
        await logouthr.logout()
    })

    test('Login the emp and apply the Leave', async ({ page }) => {
        //login urbuddi
        const empDetails = dataUtils.employeeDetails();
        const login = new LoginPage(page);
        const employees = new EmployeesMenu(page)
        const lead = new leadIdDetails(page)
        const logouthr = new logout(page)

        await login.lunchUrl("https://dev.urbuddi.com/login");
        await login.login(empemail, emppass);
        console.log("employee email : ", empemail)
        console.log("employee Password : ", emppass)
        await login.clickOnLoginButoon();
        await login.verifyDashBoardHeaderDisplayed("Dashboard")
        await login.clickOnMainMenu('Leave Management')
        await leave.verifyleaveMangementPge()
        await page.waitForTimeout(2000)
        await login.clickOnButton('Apply Leave')
        await leave.leavemanagemtnt()
        await logouthr.logout()

    })

    test('Login the Lead and Approve the Employee Leave', async ({ page }) => {
        //login urbuddi
        const empDetails = dataUtils.employeeDetails();
        const login = new LoginPage(page);
        const employees = new EmployeesMenu(page)
        const lead = new leadIdDetails(page)
        const logouthr = new logout(page)

        await login.lunchUrl("https://dev.urbuddi.com/login");
        await login.login(leadMail, leadPass);
        console.log("Lead email : ", leadMail)
        console.log("Lead Password : ", leadPass)
        await login.clickOnLoginButoon();
        await login.verifyDashBoardHeaderDisplayed("Dashboard")
    })

})