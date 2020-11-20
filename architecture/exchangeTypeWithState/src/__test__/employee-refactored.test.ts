import { EmployeeRefactored } from "../employee-refactored";
import { EmployeeType } from "../employee-type-refactored";

/* eslint-disable @typescript-eslint/explicit-function-return-type */
describe("employee", () => {
  test("engineer", () => {
    const engineer = new EmployeeRefactored(EmployeeType.ENGINEER, 300, 100, 0);
    expect(engineer.payAmount()).toBe(300);
  });
  test("salesman", () => {
    const salesman = new EmployeeRefactored(EmployeeType.SALESMAN, 300, 100, 0);
    expect(salesman.payAmount()).toBe(400);
  });
  test("manager", () => {
    const manager = new EmployeeRefactored(EmployeeType.MANAGER, 300, 100, 0);
    expect(manager.payAmount()).toBe(300);
  });
});

describe("employee", () => {
  test("payAmount is calculated properly", () => {
    const testData: { input: number; output: number }[] = [
      {
        input: 0,
        output: 300,
      },
      {
        input: 1,
        output: 400,
      },
      {
        input: 2,
        output: 350,
      },
    ];
    testData.forEach((testDatum) => {
      const employee = new EmployeeRefactored(testDatum.input, 300, 100, 50);
      expect(employee.payAmount()).toBe(testDatum.output);
    });
  });
  test("retirementPlan is calculated properly", () => {
    const testData: { input: number; output: boolean }[] = [
      {
        input: 0,
        output: true,
      },
      {
        input: 1,
        output: false,
      },
      {
        input: 2,
        output: true,
      },
    ];
    testData.forEach((testDatum) => {
      const employee = new EmployeeRefactored(testDatum.input, 300, 100, 50);
      expect(employee.hasRetirementPlan()).toBe(testDatum.output);
    });
  });
  test("isBoardMember is calculated properly", () => {
    const testData: { input: number; output: boolean }[] = [
      {
        input: 0,
        output: false,
      },
      {
        input: 1,
        output: false,
      },
      {
        input: 2,
        output: true,
      },
    ];
    testData.forEach((testDatum) => {
      const employee = new EmployeeRefactored(testDatum.input, 300, 100, 50);
      expect(employee.isBoardMember()).toBe(testDatum.output);
    });
  });
});
