const { faker } = require("@faker-js/faker");

export function employeeDetails() {
    
    const empid = faker.string.alphanumeric(6)
    const emailEmp = faker.word.noun() + empid + '@yopmail.com'
    const empass = faker.lorem.word(10)
    const lead_FirstName = faker.lorem.word(6)
    const lead_LasttName = faker.lorem.word(6)
    const lead_Password = faker.lorem.word(10)
    const lead_Id = faker.string.alphanumeric(6)
    const lead_Email = faker.word.noun() + lead_Id + '@yopmail.com'
    

    return { empid, emailEmp, empass, lead_FirstName, lead_LasttName, lead_Password, lead_Id, lead_Email}
}



3