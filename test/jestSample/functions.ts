import { NameApiService } from "./nameApiService";
import { throwOccasionally } from "./util";

export const sumOfArray = (numbers: number[]): number => {
  return numbers.reduce((a: number, b: number): number => a + b);
};

export const asyncSumOfArray = (numbers: number[]): Promise<number> => {
  return new Promise((resolve): void => {
    resolve(sumOfArray(numbers));
  });
};

export const asyncSumOfArraySometimesZero = (
  numbers: number[]
): Promise<number> => {
  return new Promise((resolve): void => {
    try {
      throwOccasionally(); // fixme: ここはリファクタリングが必要そう！
      resolve(sumOfArray(numbers));
    } catch (error) {
      resolve(0);
    }
  });
};

export const getFirstNameThrowIfLong = async (
  maxNameLength: number
): Promise<string> => {
  const nameApiSerivce = new NameApiService(); // fixme: ここはリファクタリングが必要そう！
  const firstName = await nameApiSerivce.getFirstName();

  if (firstName.length > maxNameLength) {
    throw new Error("first_name too long");
  }
  return firstName;
};
