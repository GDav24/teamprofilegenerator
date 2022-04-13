// Employee class type - manager (has office number)

const Employee = require("./Employee")

class Manager extends Employee {
  constructor (name, employeeid, email_address, position, office_number) {
    super(name, employeeid, email_address, position)
    this.office_number = office_number;
    // unique: office number
  }
}


Manager.prototype.officeNumber = function(str) {
  return (str)
}


///export module
module.exports = Manager;