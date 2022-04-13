// Employee class type: Intern (has school)


const Employee = require("./Employee")

class Intern extends Employee {
    constructor (name, employeeid, email_address, position, school) {
        super (name, employeeid, email_address, position,)
        this.school = school;
        // unique: has school

    }
}

Intern.prototype.internSchool = function(str) {
    return (str)
  }

///export module
module.exports = Intern;