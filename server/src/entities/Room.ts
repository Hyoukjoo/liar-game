import {
  Entity,
  PrimaryColumn,
  Column,
  OneToOne,
  OneToMany,
  JoinColumn,
} from "typeorm";
import BaseDateModel from "./BaseDateModel";
import User from "./User";

@Entity({ name: "rooms" })
export default class Room extends BaseDateModel {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @OneToOne(() => User, (user) => user.id)
  @JoinColumn({
    name: "owner",
    referencedColumnName: "id",
  })
  owner: User;

  @OneToMany(() => User, (user) => user.room)
  member: User[];
}
