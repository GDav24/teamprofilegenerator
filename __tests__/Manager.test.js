const Manager = require("../lib/Manager.js");

// manager test - checks office number

test("Get office number", () => {
  const testValue = "420";
 
  const e = new Manager("Gus", "5", "gus@gmail.com", "Manager", testValue);
  
  expect(e.office_number).toBe(testValue);
});
