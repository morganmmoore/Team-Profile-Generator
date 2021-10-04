const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const allEmployees = [];

function createManager() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'ID?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'Email?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'Office number?',
            name: 'officeNumber',
        },
    ]) .then((data) => {
        console.log(data);
        const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
        allEmployees.push(manager);
        mainPrompt();
    })
}

function createIntern() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'ID?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'Email?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'School?',
            name: 'school',
        },
    ]) .then((data) => {
        console.log(data);
        const intern = new Intern(data.name, data.id, data.email, data.school);
        allEmployees.push(intern);
        mainPrompt();
    })
}

function createEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'ID?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'Email?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'GitHub?',
            name: 'github',
        },
    ]) .then((data) => {
        console.log(data);
        const engineer = new Engineer(data.name, data.id, data.email, data.github);
        allEmployees.push(Engineer);
        mainPrompt();
    })
}

function mainPrompt() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'What do you want to do next?',
            name: 'main',
            choices: ['Add Engineer', 'Add Intern', 'Done'],
        },
    ]) .then((data) => {
        if (data.main === 'Add Engineer') {
            createEngineer();
        } else if (data.main === 'Add Intern') {
            createIntern();
        } else if (data.main === 'Done') {
            generateTeam();
        }
    })
}

createManager();