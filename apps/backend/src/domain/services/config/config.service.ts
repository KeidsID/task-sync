import { type EnvironmentSchema } from "./libs/types/index.js";

export abstract class ConfigService {
  abstract readonly ENV: EnvironmentSchema;
}
