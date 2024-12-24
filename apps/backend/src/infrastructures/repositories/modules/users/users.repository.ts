import { Inject, Injectable } from "@nestjs/common";

import { UsersRepository } from "~/domain/repositories/index.js";

import { UserModel } from "./user.model.js";

@Injectable()
export class UsersRepositoryImpl extends UsersRepository {
  constructor(@Inject(UserModel) private _userModel: typeof UserModel) {
    super();
  }

  override create: UsersRepository["create"] = async (newData) => {
    const createdUser = await this._userModel.query().insertAndFetch(newData);

    return createdUser.toEntity();
  };

  override read: UsersRepository["read"] = async (query) => {
    const user = await this._userModel.query().findOne(query);

    return user?.toEntity();
  };

  override readAll: UsersRepository["readAll"] = async () => {
    const users = await this._userModel.query();

    return users.map((user) => user.toEntity());
  };

  override update: UsersRepository["update"] = async (id, updateData) => {
    const updatedUser = await this._userModel
      .query()
      .patchAndFetchById(id, updateData);

    return updatedUser.toEntity();
  };

  override delete: UsersRepository["delete"] = async (id) => {
    const isDeleted = await this._userModel.query().deleteById(id);

    return !!isDeleted;
  };
}
