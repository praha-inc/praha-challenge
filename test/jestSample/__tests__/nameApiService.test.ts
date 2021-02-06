import { NameApiService } from "../nameApiService";

describe("hoge", () => {
  describe("hoge", () => {
    test("test", () => {
      const axiosMock = jest.mock("axios");
      axiosMock.mockImplementation(() => {
        get() {
          return 'hogehogehogehoeg'
        }
      });
      // const nanchatteAxios = {
      //   get() {
      //     return "hogehogehogeho";
      //   },
      // };
      // const nanchatteAxios2 = {
      //   get() {
      //     return "fuga";
      //   },
      // };
      const nameService = new NameApiService(axiosMock);
      nameService.getFirstName();
    });
  });
});
