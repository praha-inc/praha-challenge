/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Employee } from "../employee";

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
      const employee = new Employee(testDatum.input, 300, 100, 50);
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
      const employee = new Employee(testDatum.input, 300, 100, 50);
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
      const employee = new Employee(testDatum.input, 300, 100, 50);
      expect(employee.isBoardMember()).toBe(testDatum.output);
    });
  });
});
