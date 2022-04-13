const Employee = require("../lib/Employee");

const Engineer = require("../lib/Engineer");

// engineer test - checks github username

test("Get GitHub account via constructor", () => {
  const testValue = "gdav24";
  
  const e = new Engineer("Gus", "5", "gus@gmail.com", "Engineer", testValue);
  
  expect(e.github).toEqual(testValue);
});
