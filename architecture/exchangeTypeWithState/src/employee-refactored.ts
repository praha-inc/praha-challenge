/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-parameter-properties */

import { EmployeeType } from "./employee-type-refactored";

export class EmployeeRefactored {
  private _type: EmployeeType;
  public constructor(
    type: number,
    private _monthlySalary: number,
    private _comission: number,
    private _bonus: number
  ) {
    this._type = EmployeeType.newType(type);
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

  public payAmount() {
    return this._type.payAmount(this);
  }
  public hasRetirementPlan(): boolean {
    return this._type.hasRetirementPlan();
  }
  public isBoardMember(): boolean {
    return this._type.isBoardMember();
  }
}

const engineer: EmployeeRefactored = new EmployeeRefactored(
  EmployeeType.ENGINEER,
  300,
  100,
  50
);
engineer.payAmount();
