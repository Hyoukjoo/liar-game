import { Column, Entity, OneToMany, OneToOne } from 'typeorm';
import BaseModel from './BaseModel';
import Game from './Game';
import Keyword from './Keyword';

@Entity({ name: 'categories' })
export default class Category extends BaseModel {
  @Column({ unique: true })
  name: string;

  @OneToMany((type) => Game, (game) => game)
  game: Game[];

  @OneToMany(() => Keyword, (keyword) => keyword.category)
  keywords: Keyword[];
}
