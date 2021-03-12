import { CreateDateColumn, UpdateDateColumn } from "typeorm";
import BaseModel from "./BaseModel";

export default abstract class BaseDateModel extends BaseModel {
  @CreateDateColumn()
  readonly createdAt: Date;

  @UpdateDateColumn()
  readonly updatedAt: Date;
}
