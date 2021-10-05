const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("Can instantiate Employee instance", () => {
        const e = new Employee();
        expect(typeof(e).toBe("object"));
    });

    it("Can set the name", () => {
        const name = "Bob";
        expect(e.name).toBe(name);
    });

    it("Can get the ID", () => {
        const id = 25;
        const e = new Employee("Ed", id);
        expect(e.id).toBe(id);
    });

    it("Can get the email", () => {
        const email = "Jane@jane.com";
        const e = new Employee("Jane", 5, email);
        expect(e.email).toBe(email);
    });

    it("Can return employee with getRole()", () => {
        const testEmployee = "Employee";
        const e = new Employee("Cecilia, 10, C@hotmail.com");
        expect(e.getRole()).toBe(testEmployee);
    });
})