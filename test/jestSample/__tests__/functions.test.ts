// todo: ここに単体テストを書いてみましょう！
import { sumOfArray } from "../functions";

describe("functions", () => {
  describe("sumOfArray", () => {
    it("空配列だとエラー", () => {
      try {
        sumOfArray([]);
        throw new Error("this functions should throw");
      } catch (error) {
        // ok
      }
    });
    it("空配列だとエラー(toThrow記法)", () => {
      expect(() => sumOfArray([])).toThrowError();
    });
    it("[1,1]だと2が返る", () => {
      expect(sumOfArray([1, 1])).toBe(2);
    });
    // it("['a','b']だと、そもそもテストを動かせない", () => {
    //   try {
    //     sumOfArray(["a", "b"]);
    //     throw new Error("this functions should throw");
    //   } catch (error) {
    //     // ok
    //   }
    // });
  });
});
