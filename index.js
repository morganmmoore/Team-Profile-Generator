const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

const allEmployees = [];

init = () => {
    startHtml();
    createManager();
}

createManager = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the team manager\'s name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'Manager\'s ID?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'Manager\'s Email?',
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
        generateHtml(manager);
        mainPrompt();
    })
}

createIntern = () => {
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
        generateHtml(intern);
        mainPrompt();
    })
}

createEngineer = () => {
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
        allEmployees.push(engineer);
        generateHtml(engineer);
        mainPrompt();
    })
}

mainPrompt = () => {
    inquirer.prompt([
        {
            type: 'list',
            message: 'What do you want to do?',
            name: 'main',
            choices: ['Add Engineer', 'Add Intern', 'Done'],
        },
    ]) .then((data) => {
        if (data.main === 'Add Engineer') {
            createEngineer();
        } else if (data.main === 'Add Intern') {
            createIntern(); 
        } else if (data.main === 'Done') {
            completeHtml();
        }
    })
}

startHtml = () => {
    const html = `<!DOCTYPE html>
    <html lang="en">
     <head>
         <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <meta http-equiv="X-UA-Compatible" content="ie=edge">
         <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
         <title>Team Profile</title>
     </head>
    <body>
        <nav class="navbar navbar-light bg-light">
            <span class="navbar-brand w-100 text-center h1">Team Profile</span>
        </nav>
        <div class="container">
            <div class="row col justify-content-center align-items-center">`;
    fs.writeFile('./output/team.html', html, (err) => {
        if (err) {
            console.log(err);
            return;
        } 
    })
}

generateHtml = (employee) => {
    return new Promise(function(resolve, reject) {
        const name = employee.getName();
        const role = employee.getRole();
        const id = employee.getId();
        const email = employee.getEmail();

        let data = '';

        if (role === 'Manager') {
            const officeNumber = employee.getOfficeNumber();
            
            data = `<div class="card col-4 bg-dark mb-3" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title text-white">${name}</h5>
                <p class="card-text text-white">${role}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item"><a href="mailto:${email}">Email: ${email}</a></li>
                <li class="list-group-item">Office Number: ${officeNumber}</li>
            </ul>
        </div>`
        } else if (role === 'Engineer') {
            const github = employee.getGithub();

            data = `<div class="card bg-dark mb-3 col-4" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title text-white">${name}</h5>
                <p class="card-text text-white">${role}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item"><a href="mailto:${email}">Email: ${email}</a></li>
                <li class="list-group-item"><a href="https://github.com/${github}">GitHub: ${github}</a></li>
            </ul>
        </div>`
        } else if (role === 'Intern') {
            const school = employee.getSchool();

            data = `<div class="card col-4 bg-dark mb-3" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title text-white">${name}</h5>
                <p class="card-text text-white">${role}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item"><a href="mailto:${email}">Email: ${email}</a></li>
                <li class="list-group-item">School: ${school}</li>
            </ul>
        </div>`
        }
        fs.appendFile('./output/team.html', data, function (err) {
            if (err) {
                return reject(err);
            } else {
                return resolve();
            }
        })
    })
}

completeHtml = () => {
    const html =   `            </div>
    </div>
</body>
</html>`;

    fs.appendFile('./output/team.html', html, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('Complete!');
        }
    })
}

init();