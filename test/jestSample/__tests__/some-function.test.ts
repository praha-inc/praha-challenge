/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { randomObject } from "../util/some-function";

process.argv = ["hoge", "fuga"];

describe("argv", () => {
  it("argvを取れる", () => {
    expect(process.argv).toEqual(["hoge", "fuga"]);
  });
});
