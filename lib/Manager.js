const Employee = require("./Employee")

// creates an engineer type with data: name,email,id,role


class Manager extends Employee {
  constructor (name, employeeid, email_address, position, office_number) {
    super(name, employeeid, email_address, position)
    this.office_number = office_number;
  }
}


Manager.prototype.officeNumber = function(str) {
  return (str)
}


///export module
module.exports = Manager;