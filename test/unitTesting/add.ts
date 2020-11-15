import { getRandomInt } from "./util";

export const add = (...numbers: number[]): number => {
  return numbers.reduce((a: number, b: number): number => a + b);
};

export const asyncAdd = (...numbers: number[]): Promise<number> => {
  return new Promise((resolve): void => {
    resolve(numbers.reduce((a: number, b: number): number => a + b));
  });
};

export const asyncAddSometimesThrow = (
  ...numbers: number[]
): Promise<number> => {
  return new Promise((resolve, reject): void => {
    if (getRandomInt(10) < 2) {
      reject("invalid!");
      return;
    }
    resolve(numbers.reduce((a: number, b: number): number => a + b));
  });
};

export const returnZeroIfAsyncAddFails = async (
  asyncAdd: (...numbers: number[]) => Promise<number>,
  ...numbers: number[]
): Promise<number> => {
  try {
    const result = await asyncAdd(...numbers);
    return result;
  } catch (error) {
    return 0;
  }
};
