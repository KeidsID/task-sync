import { type AppEnvironment } from "~/libs/enums/index.js";
import { type ValueOf } from "~/libs/types/index.js";

export type EnvironmentSchema = {
  APP: {
    ENVIRONMENT: ValueOf<typeof AppEnvironment>;
    PORT: number;
  };
  DB: {
    CLIENT: string;
    HOST: string;
    PORT: number;
    USER_NAME: string;
    USER_PASSWORD: string;
    DATABASE_NAME: string;
    POOL_MIN: number;
    POOL_MAX: number;
  };
  JWT: {
    SECRET: string;
    EXPIRES_IN: string;
  };
};
