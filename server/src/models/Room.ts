import {
  Entity,
  Column,
  OneToOne,
  OneToMany,
  JoinColumn,
  PrimaryGeneratedColumn,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import User from './User';

interface Data {
  user: User;
  roomName: string;
}
@Entity({ name: 'rooms' })
export default class Room extends BaseEntity {
  static createModel(data: Data) {
    const model = new Room();
    model.name = data.roomName;
    model.owner = data.user;
    return model;
  }

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToOne(() => User, (user) => user.id)
  @JoinColumn({
    name: 'owner',
    referencedColumnName: 'id',
  })
  owner: User;

  @OneToMany(() => User, (user) => user.room)
  member: User[];

  @CreateDateColumn()
  readonly createdAt: Date;

  @UpdateDateColumn()
  readonly updatedAt: Date;
}
