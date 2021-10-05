const Manager = require("../lib/Manager");

test("Can set office number", () => {
    const officeNumber = 20;
    const e = new Manager("Fred", 22, "Fred@gmail.com", officeNumber);
    expect(e.officeNumber).toBe(officeNumber);
});

test("Can get office number via getOfficeNumber()", () => {
    const officeNumber = 20
    const e = new Manager("Fred", 22, "Fred@gmail.com", officeNumber);
    expect(e.getOfficeNumber()).toBe(officeNumber);
});

test("getRole() should return Manager", () => {
    const role = "Manager";
    const e = new Manager("Fred", 22, "Fred@gmail.com", 20);
    expect(e.getRole()).toBe(role);
});