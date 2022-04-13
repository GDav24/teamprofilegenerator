const Employee = require("../lib/Employee");

const Engineer = require("../lib/Engineer");

// test('github', () => {
//     it('should return true if equals text', () => {
  
//       const result = new Engineer().isGithub(str);
  
//       expect(result).toEqual(true);
//     });
//   });

test("Get GitHUb account via constructor", () => {
  const testValue = "gdav24";
  
  const e = new Engineer("Gus", "5", "gus@gmail.com", "Engineer", testValue);
  
  expect(e.github).toEqual(testValue);
});
