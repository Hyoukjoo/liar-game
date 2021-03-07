import { Entity, JoinColumn, OneToMany, OneToOne } from "typeorm";
import BaseDateModel from "./BaseDateModel";
import Category from "./Category";
import Room from "./Room";

@Entity({ name: "games" })
export default class Game extends BaseDateModel {
  @OneToOne(() => Room)
  @JoinColumn({
    name: "room_id",
    referencedColumnName: "id",
  })
  room: Room;

  @OneToMany(() => Category, (category) => category)
  categories: Category[];
}
