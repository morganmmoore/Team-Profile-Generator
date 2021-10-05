const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("Can instantiate Employee instance", () => {
        const e = new Employee();
        expect(typeof(e).toBe("object"));
    });

    it("Can set the name", () => {
        const name = "Fred";
        expect(e.name).toBe(name);
    });

    it("Can get the ID", () => {
        const id = 22;
        const e = new Employee("Fred", id);
        expect(e.id).toBe(id);
    });

    it("Can get the email", () => {
        const email = "Fred@gmail.com";
        const e = new Employee("Fred", 22, email);
        expect(e.email).toBe(email);
    });

    it("Can return employee with getRole()", () => {
        const testEmployee = "Employee";
        const e = new Employee("Fred, 22, Fred@gmail.com");
        expect(e.getRole()).toBe(testEmployee);
    });
})