// todo: ここに単体テストを書いてみましょう！
import { asyncSumOfArraySometimesZeroMock, sumOfArray } from "../functions";
import { DatabaseMock } from "../util";
import { mocked } from "ts-jest/utils";

// const dbMock = mocked(DatabaseMock, true);
jest.mock("../util", () => {
  return {
    DatabaseMock: jest.fn().mockImplementation(() => {
      return {
        save: jest.fn(),
      };
    }),
  };
});

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
  describe("false positive", () => {
    test("test", () => {
      // expect.hasAssertions();
      setTimeout(() => {
        expect(1).toBe(2);
      }, 1000);
    });
  });
  describe.only("sometimesZero", () => {
    test("test", () => {
      const dbInstance = new DatabaseMock();
      dbInstance.save = () => {
        throw new Error("aaa!");
      };
      expect(
        asyncSumOfArraySometimesZeroMock([1, 2], dbInstance)
      ).resolves.toBe(0);
    });
    test("test", () => {
      const dbInstance = new DatabaseMock();
      dbInstance.save = () => {
        // do nothing
      };
      expect(
        asyncSumOfArraySometimesZeroMock([1, 2], dbInstance)
      ).resolves.toBe(0);
    });
  });
});
