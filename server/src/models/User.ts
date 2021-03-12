import { Column, Entity, ManyToOne } from "typeorm";
import BaseDateModel from "./BaseDateModel";
import Room from "./Room";

@Entity({ name: "users" })
export default class User extends BaseDateModel {
  @Column({ unique: true })
  name: string;

  @ManyToOne(() => Room, (room) => room.member, {
    cascade: ["insert", "update", "remove"],
  })
  room: Room;
}
