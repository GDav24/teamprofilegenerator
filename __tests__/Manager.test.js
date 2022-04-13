// const Employee = require("../lib/Employee");

// const Manager = require("../lib/Manager");


// // manager type: tests for unique aspect = office number

// describe('officeNumber', () => {
//     it('should return true if equals integer', () => {
//       const str = '56';
  
//       const result = Manager().officeNumber(str);
  
//       expect(result).toEqual(true);
//     });
//   });

const Manager = require("../lib/Manager.js");

test("Get office number", () => {
  const testValue = "420";
 
  const e = new Manager("Gus", "5", "gus@gmail.com", "Manager", testValue);
  
  expect(e.office_number).toBe(testValue);
});
