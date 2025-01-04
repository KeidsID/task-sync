import { type EncryptedUser } from "../entities/index.js";
import { type Repository } from "./repository.js";

export abstract class UsersRepository implements Repository<EncryptedUser> {
  abstract create: Repository<EncryptedUser>["create"];
  abstract read: Repository<EncryptedUser>["read"];
  abstract readAll: Repository<EncryptedUser>["readAll"];
  abstract update: Repository<EncryptedUser>["update"];
  abstract delete: Repository<EncryptedUser>["delete"];
}
