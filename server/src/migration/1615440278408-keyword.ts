import { getRepository, MigrationInterface, QueryRunner } from 'typeorm';
import Category from '../models/Category';
import Keyword from '../models/Keyword';
import { AnimalSeed } from '../seed/keyword/aniaml.seed';
import { CapitalSeed } from '../seed/keyword/capital.seed';
import { FruitSeed } from '../seed/keyword/fruit.seed';

export class keyword1615440278408 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const animalCategory = await queryRunner.manager.findOne<Category>(
      Category,
      { where: { name: '동물' } }
    );

    const animalKeyword = AnimalSeed.map((keyword) =>
      Keyword.create({ name: keyword.name, category: animalCategory })
    );

    const capitalCategory = await queryRunner.manager.findOne(Category, {
      where: { name: '국가' },
    });

    const capitalKeyword = CapitalSeed.map((seed) =>
      Keyword.create({ name: seed.name, category: capitalCategory })
    );

    const fruitCategory = await queryRunner.manager.findOne(Category, {
      where: { name: '과일' },
    });

    const fruitKeyword = FruitSeed.map((seed) =>
      Keyword.create({ name: seed.name, category: fruitCategory })
    );

    await getRepository(Keyword).save([
      ...animalKeyword,
      ...capitalKeyword,
      ...fruitKeyword,
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
