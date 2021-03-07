import { BaseEntity, PrimaryGeneratedColumn } from "typeorm";

export default abstract class BaseModel extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;
}
