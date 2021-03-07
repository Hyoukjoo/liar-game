import { CreateDateColumn, UpdateDateColumn } from "typeorm";
import BaseModel from "./BaseModel";

export default abstract class BaseDateModel extends BaseModel {
  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;
}
