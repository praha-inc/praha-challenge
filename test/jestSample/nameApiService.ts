import axios from "axios";

export class NameApiService {
  public constructor() {}

  public async getFirstName(): Promise<string> {
    // fixme: ここはリファクタリングが必要そう！
    const { data } = await axios.get(
      "https://random-data-api.com/api/name/random_name"
    );
    return data.first_name as string;
  }
}
