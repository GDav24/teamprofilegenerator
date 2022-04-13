
const { expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

// test for return of info : name, id, email, role

describe('Name', () => {
  it('test name', () => {
    const str = 'Goose';

    const e = new Employee().employeeName(str);

    expect(e).toEqual(str);
  });
});

describe('employeeidNumber', () => {
  it('test id', () => {
    const str = '24';

    const e = new Employee().employeeidNumber(str);

    expect(e).toEqual(str);
  });
});

describe('employeeemailAddress', () => {
  it('test fro email', () => {
    const str = 'goose@gmail.com';

    const e = new Employee().employeeemailAddress(str);

    expect(e).toEqual(str);
  });
});

describe('employeePosition', () => {
  it('test for Manager, Intern or Engineer', () => {
    const str = 'Manager';

    const e = new Employee().employeePosition(str);

    expect(e).toBe(str);
  });
});



