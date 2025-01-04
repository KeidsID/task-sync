import { type EncryptedUser } from "~/domain/entities/index.js";
import { DatabaseTableName } from "~/libs/enums/index.js";

import { Model } from "../../libs/models/model.js";

export class UserModel extends Model {
  email!: string;
  passwordHash!: string;
  passwordSalt!: string;
  name!: string;

  static override get tableName(): string {
    return DatabaseTableName.USERS;
  }

  toEntity(): EncryptedUser {
    return {
      ...this,
      createdAt: new Date(this.createdAt),
      updatedAt: new Date(this.updatedAt),
    };
  }
}
