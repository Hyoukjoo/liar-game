import { Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import BaseDateModel from './BaseDateModel';
import Category from './Category';
import Room from './Room';

interface Data {
  room: Room;
  category: Category;
}

@Entity({ name: 'games' })
export default class Game extends BaseDateModel {
  static async createModel(data: Data) {
    const model = new Game();
    model.room = data.room;
    model.category = data.category;
    return model;
  }

  @OneToOne(() => Room)
  @JoinColumn()
  room: Room;

  @ManyToOne(() => Category, (category) => category)
  @JoinColumn()
  category: Category;
}
