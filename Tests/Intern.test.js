const Intern = require("../lib/Intern");

test("Can set the school", () => {
    const school = "OSU";
    const e = new Intern("Fred", 22, "Fred@gmail.com", school);
    expect(e.school).toBe(school);
});

test("Can get school via getSchool()", () => {
    const school = "OSU";
    const e = new Intern("Fred", 22, "Fred@gmail.com", school);
    expect(e.getSchool()).toBe(school);
});

test("getRole() will return 'Intern'", () => {
    const role = "Intern";
    const e = new Intern("Fred", 22, "Fred@gmail.com", "OSU");
    expect(e.getRole()).toBe(role);
});
