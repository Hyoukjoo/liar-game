import { Column, Entity, OneToMany } from "typeorm";
import BaseModel from "./BaseModel";
import Keyword from "./Keyword";

@Entity({ name: "categories" })
export default class Category extends BaseModel {
  @Column({ unique: true })
  name: string;

  @OneToMany(() => Keyword, (keyword) => keyword.category)
  keywords: Keyword[];
}
