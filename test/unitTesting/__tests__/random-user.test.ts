/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { fetchName, fetchValidName } from "../random-user";

describe("fetchName", () => {
  test("何らかの文字列を取得できること", async () => {
    const name = await fetchName();
    expect(typeof name).toBe("string");
  });
});

describe("fetchValidName", () => {
  test("文字数が10文字より多い名前だったら'name too long!'エラーが発生する", () => {
    expect.assertions(1);
    const mock = jest.fn(fetchName).mockResolvedValue("a".repeat(11));
    return expect(fetchValidName(mock)).rejects.toThrowError("name too long!");
  });
});
