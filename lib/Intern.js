const Employee = require("./Employee")

// Employee class type: Intern (has school)


class Intern extends Employee {
    constructor (name, employeeid, email_address, position, school) {
        super (name, employeeid, email_address, position,)
        this.school = school;

    }
}

Intern.prototype.internSchool = function(str) {
    return (str)
  }

///export module
module.exports = Intern;