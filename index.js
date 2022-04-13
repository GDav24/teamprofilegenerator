
// node packages and template and html generators
const fs = require('fs');
const { writeFile, copyFile } = require('./utils/generate-site.js');
const inquirer = require('inquirer');
const generateHtml= require('./utils/generate-site.js');



const Manager = require("./lib/Manager")
const Employee = require("./lib/Employee")
const Intern = require("./lib/Intern")
const Engineer = require("./lib/Engineer")

const managerEmployees = [];
const internEmployees = [];
const engineerEmployees = [];
const rosterEmployee = [];



// prompt function 
function promptMe() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is employee name?',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the employee name!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'employeeid',
      message: 'What is the Employee ID?',
      validate: employeeidInput => {
        if (employeeidInput) {
          return true;
        } else {
          console.log('Please enter the employee ID!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email_address',
      message: 'What is employee email address?',
      validate: emailAddressInput => {
        if (emailAddressInput) {
          return true;
        } else {
          console.log('Please enter the email address!');
          return false;
        }
      }
    },
    // prompts that ask basic employee info every employee needs despite role
    {
      type: 'list',
      name: 'position',
      message: 'Select Manager, Engineer or Intern!',
      choices: ["Manager", "Engineer", "Intern"],
      validate: RoleInput => {
        if (RoleInput) {
          return true;
        } else {
          console.log('Please select a Position!');
          return false;
        }
      }
    },

  ])
    .then(responses => {
      if (responses.position === "Manager") {
        inquirer.prompt([
          {
            type: 'input',
            name: 'office_number',
            message: 'What is the Manager office number?',
            validate: officeNumberInput => {
              if (officeNumberInput) {
                return true;
              } else {
                console.log('Please enter your office Number!');
                return false;
              }
            }
          }
        ])

          .then(response => {
            const managerEmployee = new Manager(responses.name, responses.employeeid, responses.email_address, responses.position, response.office_number)
            managerEmployees.push(managerEmployee );
            console.log(managerEmployee)
            moreEmployees()
            // manager employee: asks office number
          })
      } else if (responses.position === "Engineer") {
        inquirer.prompt([
          {
            type: 'input',
            name: 'github',
            message: "What is Engineer's Github username?",
            validate: githubInput => {
              if (githubInput) {
                return true;
              } else {
                console.log('Please enter the Github username!');
                return false;
              }
            }
          }
        ])
          .then(response => {
            const engineerEmployee = new Engineer(responses.name, responses.employeeid, responses.email_address, responses.position, response.github)
            engineerEmployees.push(engineerEmployee)
            console.log(engineerEmployee)
            moreEmployees()
            // engineer employee: asks for github
          }) 
      } else if (responses.position === "Intern") {
        inquirer.prompt([
          {
            type: 'input',
            name: 'school',
            message: "What school does the intern attend?",
            validate:  schoolInput => {
              if (schoolInput) {
                return true;
              } else {
                console.log("Please enter the School Name")
                return false;
              }
            }
          }
        ])
          .then(response => {
            const internEmployee = new Intern(responses.name, responses.employeeid, responses.email_address, responses.position, response.school)
            internEmployees.push(internEmployee)
            console.log(internEmployee)
            moreEmployees()
            // intern employee: asks for school
          })
      }
    }); 

};



/// creates a yes/no question to add new employee
function moreEmployees() {
  inquirer.prompt([
    {
        type:'confirm',
        name: 'add_employee',
        message:'Do you want to add more Employees?',
        default: false
    }
])
  .then(moreResponse => {
    if (moreResponse.add_employee === true){
    promptMe();
    } else {
           writeFile(managerEmployees, engineerEmployees, internEmployees)
        //    if user chooses no then html file written with roster of employees
    }
  })
}




promptMe()

