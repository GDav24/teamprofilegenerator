const Employee = require("./Employee.js");

// creates an engineer type with data: name,email,id,role

class Engineer extends Employee {
    constructor (name, employeeid, email_address,position, github) {
        super(name, employeeid, email_address, position);
        this.github = github;
    }
}
Engineer.prototype.isGithub = function(str) {
    return (str)
  }

module.exports = Engineer;