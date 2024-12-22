import { type Knex } from "knex";

import { DatabaseTableName } from "~/libs/enums/index.js";

import { UsersTableColumnName as ColumnName } from "../libs/enums/index.js";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(DatabaseTableName.USERS, (build) => {
    build.string(ColumnName.ID).primary();
    build.string(ColumnName.EMAIL).unique();
    build.string(ColumnName.PASSWORD_HASH).notNullable();
    build.string(ColumnName.PASSWORD_SALT).notNullable();
    build.string(ColumnName.NAME).notNullable();
    build
      .dateTime(ColumnName.CREATED_AT)
      .notNullable()
      .defaultTo(knex.fn.now());
    build
      .dateTime(ColumnName.UPDATED_AT)
      .notNullable()
      .defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists(DatabaseTableName.USERS);
}
