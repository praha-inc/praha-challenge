import { randomObject } from "../util/some-function";

// jest.mock("../util/some-function");

describe("some-function", () => {
  it("returns random!", () => {
    expect(randomObject.randomFunction()).toBe("random!");
  });
  it("spy", () => {
    jest.spyOn(randomObject, "randomFunction");
    expect(randomObject.randomFunction()).toBe("random!");
  });
  it("mock", () => {
    const mockFn = jest.fn().mockImplementationOnce(() => "not random!");
    randomObject.randomFunction = mockFn;
    expect(randomObject.randomFunction()).toBe("not random!");
    expect(randomObject.randomFunction).toHaveBeenCalledTimes(1);
  });
});
