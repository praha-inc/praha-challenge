import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Photo {
  @PrimaryColumn()
  public id: number;

  @Column()
  public name: string;

  @Column()
  public description: string;

  @Column()
  public filename: string;

  @Column()
  public views: number;

  @Column()
  public isPublished: boolean;

  public constructor(params?: {
    id: number;
    name: string;
    description: string;
    filename: string;
    views: number;
  }) {
    if (params) {
      const { id, name, description, filename, views } = params;
      this.id = id;
      this.name = name;
      this.description = description;
      this.filename = filename;
      this.views = views;
    }
  }
}
