const Employee = require("./Employee.js");

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