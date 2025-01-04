import { type Entity } from "../entity.js";

export type User = Entity & {
  email: string;
  password: string;
  name: string;
};
