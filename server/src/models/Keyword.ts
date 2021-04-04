import { Column, Entity, ManyToOne } from 'typeorm';
import BaseModel from './BaseModel';
import Category from './Category';

@Entity({ name: 'keywords' })
export default class Keyword extends BaseModel {
  @Column()
  name: string;

  @ManyToOne(() => Category, (category) => category.keywords)
  category: Category;
}
