import { type Knex } from "knex";

import { type AppEnvironment } from "~/libs/enums/index.js";
import { type ValueOf } from "~/libs/types/index.js";

export abstract class DatabaseService {
  abstract configs: Record<ValueOf<typeof AppEnvironment>, Knex.Config>;
}
