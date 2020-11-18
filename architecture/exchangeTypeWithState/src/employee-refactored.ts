/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-parameter-properties */

export abstract class EmployeeType {
  public static readonly ENGINEER: number = 0;
  public static readonly SALESMAN: number = 1;
  public static readonly MANAGER: number = 2;
  public static readonly SUPER_MANAGER: number = 3;

  abstract getTypeCode(): number;
  abstract payAmount(e: EmployeeRefactored): number;
  abstract retirementPlan(e: EmployeeRefactored): boolean;

  public static newType(typeCode: number): EmployeeType {
    switch (typeCode) {
      case EmployeeType.ENGINEER:
        return new Engineer();
      case EmployeeType.SALESMAN:
        return new Salesman();
      case EmployeeType.MANAGER:
        return new Manager();
      case EmployeeType.SUPER_MANAGER:
        return new SuperManager();
      default:
        throw new Error("invalid employee type");
    }
  }
}

class Engineer extends EmployeeType {
  public payAmount(employee: EmployeeRefactored): number {
    return employee.getMonthlySalary;
  }
  public getTypeCode() {
    return EmployeeType.ENGINEER;
  }
  public retirementPlan() {
    return false;
  }
}

class Salesman extends EmployeeType {
  public payAmount(employee: EmployeeRefactored): number {
    return employee.getMonthlySalary + employee.getComission;
  }
  public getTypeCode() {
    return EmployeeType.SALESMAN;
  }
  public retirementPlan() {
    return false;
  }
}

class Manager extends EmployeeType {
  public payAmount(employee: EmployeeRefactored): number {
    return employee.getMonthlySalary + employee.getBonus;
  }
  public getTypeCode() {
    return EmployeeType.MANAGER;
  }
  public retirementPlan() {
    return true;
  }
}
class SuperManager extends EmployeeType {
  public payAmount(employee: EmployeeRefactored): number {
    return (
      employee.getMonthlySalary + employee.getBonus + employee.getComission
    );
  }
  public getTypeCode() {
    return EmployeeType.SUPER_MANAGER;
  }
  public retirementPlan() {
    return true;
  }
}

export class EmployeeRefactored {
  public constructor(
    private _type: EmployeeType,
    private _monthlySalary: number,
    private _comission: number,
    private _bonus: number
  ) {}

  public getTypeCode() {
    return this._type.getTypeCode();
  }
  public get getMonthlySalary() {
    return this._monthlySalary;
  }
  public get getComission() {
    return this._comission;
  }
  public get getBonus() {
    return this._bonus;
  }

  public setType(typeCode: number) {
    this._type = EmployeeType.newType(typeCode);
  }

  // memo:給与計算
  public payAmount() {
    return this._type.payAmount(this);
  }
  public retirementPlan(): boolean {
    return this._type.retirementPlan(this);
  }
}
