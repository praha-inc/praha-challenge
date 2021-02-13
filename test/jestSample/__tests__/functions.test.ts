/* eslint-disable @typescript-eslint/explicit-function-return-type */
// todo: ここに単体テストを書いてみましょう！
import {
  asyncSumOfArray,
  asyncSumOfArraySometimesZeroMock,
  sumOfArray,
} from "../functions";
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

  // describe("asyncSumOfArray", () => {
  //   test("test", () => {
  //     expect.hasAssertions();
  //     expect(asyncSumOfArray([])).resolves.toBe(1);
  //   });
  //   test("test2", () => {
  //     expect(asyncSumOfArray([])).rejects.toThrowError();
  //   });
  //   test("test2", () => {
  //     expect(asyncSumOfArray([1, 2])).resolves.toBe(3);
  //   });
  //   // test("偽陽性:false positive", () => {
  //   //   setTimeout(() => {
  //   //     expect(true).toBeFalsy();
  //   //   }, 1000);
  //   // });
  // });

  describe("sometimesZero", () => {
    test("test", async () => {
      const dbInstance = new DatabaseMock();
      dbInstance.save = () => {
        throw new Error("aaa!");
      };
      await expect(
        asyncSumOfArraySometimesZeroMock([1, 2], dbInstance)
      ).resolves.toBe(0);
    });
    test("test", async () => {
      const dbInstance = new DatabaseMock();
      dbInstance.save = () => {
        // do nothing
      };
      await expect(
        asyncSumOfArraySometimesZeroMock([1, 2], dbInstance)
      ).resolves.toBe(3);
    });
  });
});
