const Engineer = require("../lib/Engineer");

test("can set GitHub", () => {
    const testGithub = githubUser;
    const e = new Engineer("Fred", 22, "Fred@gmail.com", testGithub);
    expect(e.github).toBe(testGithub);
});

test("Can get gitHub username via getGithub()", () => {
    const testGithub = githubUser;
    const e = new Engineer("Fred", 22, "Fred@gmail.com", testGithub);
    expect(e.getGithub()).toBe(testGithub);
});

test("getRole() should return 'Engineer'", () => {
    const role = "Engineer";
    const e = new Engineer("Fred", 22, "Fred@gmail.com", role);
    expect(e.getRole()).toBe(role);
});