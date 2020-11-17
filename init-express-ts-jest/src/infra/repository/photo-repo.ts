import { Connection } from "typeorm";
import { Photo } from "../datamodel/photo";

class PhotoRepoDeep {
  private conn: Connection;
  public constructor(conn: Connection) {
    this.conn = conn;
  }
  public async index() {
    const photos = await this.conn.getRepository(Photo).find();
    return photos;
  }
}

export class PhotoRepo {
  private conn: Connection;

  public constructor(conn: Connection) {
    this.conn = conn;
  }
  public async index() {
    const repoDeep = new PhotoRepoDeep(this.conn);
    return repoDeep.index();
  }
  public async create() {
    await this.conn.getRepository(Photo).create({ id: 1, name: "photo1" });
  }
}
