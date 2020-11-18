import { EmployeeRefactored, EmployeeType } from "../employee-refactored";

/* eslint-disable @typescript-eslint/explicit-function-return-type */
describe("employee", () => {
  test("engineer", () => {
    const engineer = new EmployeeRefactored(
      EmployeeType.newType(EmployeeType.ENGINEER),
      300,
      100,
      0
    );
    expect(engineer.payAmount()).toBe(300);
  });
  test("salesman", () => {
    const salesman = new EmployeeRefactored(
      EmployeeType.newType(EmployeeType.SALESMAN),
      300,
      100,
      0
    );
    expect(salesman.payAmount()).toBe(400);
  });
  test("manager", () => {
    const manager = new EmployeeRefactored(
      EmployeeType.newType(EmployeeType.MANAGER),
      300,
      100,
      0
    );
    expect(manager.payAmount()).toBe(300);
  });
});
