// const Employee = require("../lib/Employee");

// const Intern = require("../lib/Intern");

// // intern type: tests for unique aspect = school

// describe('internSchool', () => {
//     it('should return true if equals text', () => {
//       const str = 'FSU';
  
//       const result = Intern().internSchool(str);
  
//       expect(result).toEqual(true);
//     });
//   });

const Intern = require('../lib/Intern.js');

test("Get school via constructor", () => {
  const testValue = "FSU";
  const e = new Intern("Gus", "5", "gus@gmail.com", "Intern", testValue);
  expect(e.school).toBe(testValue);
});
