/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { PhotoRepo } from "../photo-repo";
import { createConnectionPool } from "../../typeorm";
import { Connection, getConnection } from "typeorm";

describe("photo-repo", () => {
  let conn: Connection;
  beforeAll(async () => {
    conn = await createConnectionPool();
  });
  describe("nest", () => {
    test("index", async () => {
      const conn = await getConnection();
      const repo = new PhotoRepo(conn);
      const photos = await repo.index();
      expect(photos).toHaveLength(0);
    });
  });
  describe("nest2", () => {
    test("index", async () => {
      const conn = await getConnection();
      const repo = new PhotoRepo(conn);
      const photos = await repo.index();
      expect(photos).toHaveLength(0);
    });
  });
  afterAll(async () => {
    await conn.close();
  });
});
