/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {
  add,
  asyncAdd,
  asyncAddSometimesThrow,
  returnZeroIfAsyncAddFails,
} from "../add";

describe("add", () => {
  test("足し算を正しく行う事", () => {
    const testData: { input: number[]; output: number }[] = [
      { input: [1, 2], output: 3 },
      { input: [4, 9], output: 13 },
      { input: [1, -10], output: -9 },
    ];
    testData.forEach((testDatum) => {
      expect(add(...testDatum.input)).toBe(testDatum.output);
    });
  });
});

describe("asyncAdd", () => {
  test("非同期の足し算を行う事", () => {
    const testData: { input: number[]; output: number }[] = [
      { input: [1, 2], output: 3 },
      { input: [4, 9], output: 13 },
      { input: [1, -10], output: -9 },
    ];
    testData.forEach((testDatum) => {
      expect(asyncAdd(...testDatum.input)).resolves.toBe(testDatum.output);
    });
  });
});

describe("asyncAddSometimesThrow", () => {
  test("成功した時は3, 例外をキャッチした時は'invalid!'のエラーが発生する事", async () => {
    const testData: { input: number[]; output: number }[] = [
      { input: [1, 2], output: 3 },
      { input: [4, 9], output: 13 },
      { input: [1, -10], output: -9 },
    ];
    try {
      for (const testDatum of testData) {
        const result = await asyncAddSometimesThrow(...testDatum.input);
        expect(result).toBe(testDatum.output);
      }
    } catch (error) {
      expect(error).toBe("invalid!");
    }
  });
});

describe("returnZeroIfAsyncAddFails", () => {
  test("例外をキャッチしたら0を返す事", async () => {
    // memo: mockを使うことで強制的に例外を引き起こす
    const mockAsyncAdd = (_: number, __: number) => {
      throw new Error("invalid!");
    };
    await expect(
      returnZeroIfAsyncAddFails(mockAsyncAdd, ...[1, 2])
    ).resolves.toBe(0);
  });
});
