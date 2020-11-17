/* eslint-disable @typescript-eslint/no-parameter-properties */
class Employee {
  public static readonly ENGINEER: number = 0;
  public static readonly SALESMAN: number = 1;
  public static readonly MANAGER: number = 2;
  public constructor(
    private _type: number,
    private _monthlySalary: number,
    private _comission: number,
    private _bonus: number
  ) {}

  // memo:給与計算
  public payAmount() {
    switch (this._type) {
      case Employee.ENGINEER:
        return this._monthlySalary;
      case Employee.SALESMAN:
        return this._monthlySalary + this._comission;
      case Employee.MANAGER:
        return this._monthlySalary + this._bonus;
      default:
        throw new Error("invalid employee type");
    }
  }
}
