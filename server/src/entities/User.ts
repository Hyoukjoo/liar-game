import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import BaseDateModel from "./BaseDateModel";
import Room from "./Room";

@Entity({ name: "users" })
export default class User extends BaseDateModel {
  @Column()
  name: string;

  @ManyToOne(() => Room, (room) => room.member)
  @JoinColumn()
  room: Room;
}
