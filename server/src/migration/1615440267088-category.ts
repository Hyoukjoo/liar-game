import { getRepository, MigrationInterface, QueryRunner } from 'typeorm';
import Category from '../models/Category';
import { CategorySeed } from '../seed/category/category.seed';

export class category1615440267088 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await getRepository(Category).save(CategorySeed);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
