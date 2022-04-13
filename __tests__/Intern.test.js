const Intern = require('../lib/Intern.js');

// intern test - checks school

test("Get school via constructor", () => {
  const testValue = "FSU";
  const e = new Intern("Gus", "5", "gus@gmail.com", "Intern", testValue);
  expect(e.school).toBe(testValue);
});
