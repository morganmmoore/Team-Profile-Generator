const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("Can instantiate Employee instance", () => {
        const e = new Employee();
        expect(typeof(e)).toBe("object");
    });

    it("Can set the name", () => {
        const testName = "Fred";
        const e = new Employee(testName);
        expect(e.name).toBe(testName);
    });

    it("Can set the ID", () => {
        const testId = 22;
        const e = new Employee("Fred", testId);
        expect(e.id).toBe(testId);
    });

    it("Can set the email", () => {
        const testEmail = "Fred@gmail.com";
        const e = new Employee("Fred", 22, testEmail);
        expect(e.email).toBe(testEmail);
    });

    describe("getName", () => {
        it("Can get name via getName()", () => {
            const testName = "Fred";
            const e = new Employee(testName);
            expect(e.getName()).toBe(testName);
        });
    });

    describe("getId", () => {
        it("Can get ID via getId()", () => {
            const testId = 22;
            const e = new Employee("Fred", testId);
            expect(e.getId()).toBe(testId);
        });
    });

    describe("getEmail", () => {
        it("Can get email via getEmail()", () => {
            const testEmail = "Fred@gmail.com";
            const e = new Employee("Fred", 22, testEmail);
            expect(e.getEmail()).toBe(testEmail);
        });
    });

    describe("getRole", () => {
        it("Can return employee with getRole()", () => {
            const testEmployee = "Employee";
            const e = new Employee("Fred", 22, "Fred@gmail.com");
            expect(e.getRole()).toBe(testEmployee);
        });
    });
});