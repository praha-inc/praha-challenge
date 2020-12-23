/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { saveUserInput } from "../save-user-input";
import fs from "fs";

describe("save-user-input", () => {
  afterEach(() => {
    fs.unlinkSync("mockDB");
  });
  test("ユーザの入力がファイルに保存される", async () => {
    const INPUT = "hogehoge";
    await saveUserInput(
      (input: string): Promise<void> => fs.promises.appendFile("mockDB", input),
      INPUT
    );
    const result = fs.readFileSync("mockDB").toString();
    expect(result).toBe(INPUT);
  });
  test("ユーザの入力がファイルに保存される2", async () => {
    const INPUT = "fugafuga";
    await saveUserInput(
      (input: string): Promise<void> => fs.promises.appendFile("mockDB", input),
      INPUT
    );
    const result = fs.readFileSync("mockDB").toString();
    expect(result).toBe(INPUT);
  });
});
