import { nanoid } from "nanoid";
import { Model as ModelLibrary } from "objection";

import { CommonNumber } from "~/libs/enums/index.js";

const GENERATED_ID_LENGTH = 12;

const pascalToCamelCase = (value: string): string => {
  return (
    value.charAt(CommonNumber.ZERO).toLowerCase() +
    value.slice(CommonNumber.ONE)
  );
};

export abstract class Model extends ModelLibrary {
  id!: string;

  /** ISO format date */
  createdAt!: string;

  /** ISO format date */
  updatedAt!: string;

  override $beforeInsert(): void {
    const idPrefix = pascalToCamelCase(this.constructor.name).replace(
      "Model",
      "-"
    );

    this.id = idPrefix + nanoid(GENERATED_ID_LENGTH);

    const insertDate = new Date().toISOString();

    this.createdAt = insertDate;
    this.updatedAt = insertDate;
  }

  override $beforeUpdate(): void {
    this.updatedAt = new Date().toISOString();
  }
}
