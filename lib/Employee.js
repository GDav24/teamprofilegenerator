// creates an employee class with data: name,email,id,role
const inquirer = require('inquirer');

class Employee {
    constructor(name, employeeid, email_address, position) {
        this.name = name;
        this.employeeid = employeeid;
        this.email_address = email_address;
        this.position = position;
    }
   
}

Employee.prototype.employeeName = function(str) {
  return (str)
}
  
Employee.prototype.employeeidNumber = function(str) {
  return (str)
}

Employee.prototype.employeeemailAddress = function(str) {
  return (str)
}

Employee.prototype.employeePosition = function(str) {
  return (str);
}

module.exports = Employee;
