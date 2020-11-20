/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-use-before-define */
import { EmployeeRefactored } from "./employee-refactored";

export abstract class EmployeeType {
  public static readonly ENGINEER: number = 0;
  public static readonly SALESMAN: number = 1;
  public static readonly MANAGER: number = 2;

  abstract payAmount(e: EmployeeRefactored): number;
  abstract hasRetirementPlan(): boolean;
  abstract isBoardMember(): boolean;

  public static newType(typeCode: number): EmployeeType {
    switch (typeCode) {
      case EmployeeType.ENGINEER:
        return new Engineer();
      case EmployeeType.SALESMAN:
        return new Salesman();
      case EmployeeType.MANAGER:
        return new Manager();
      default:
        throw new Error("invalid employee type");
    }
  }
}

class Engineer extends EmployeeType {
  public payAmount(employee: EmployeeRefactored): number {
    return employee.getMonthlySalary;
  }
  public hasRetirementPlan() {
    return true;
  }
  public isBoardMember() {
    return false;
  }
}

class Salesman extends EmployeeType {
  public payAmount(employee: EmployeeRefactored): number {
    return employee.getMonthlySalary + employee.getComission;
  }
  public hasRetirementPlan() {
    return false;
  }
  public isBoardMember() {
    return false;
  }
}

class Manager extends EmployeeType {
  public payAmount(employee: EmployeeRefactored): number {
    return employee.getMonthlySalary + employee.getBonus;
  }
  public hasRetirementPlan() {
    return true;
  }
  public isBoardMember() {
    return true;
  }
}
