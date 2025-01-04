/* eslint-disable unicorn/no-null */
import { Injectable } from "@nestjs/common";
import convict, { Config as ConvictConfig } from "convict";
import { config as dotenv } from "dotenv";

import {
  ConfigService,
  type EnvironmentSchema,
  LoggerService,
} from "~/domain/services/index.js";
import { AppEnvironment } from "~/libs/enums/index.js";

@Injectable()
export class ConfigServiceImpl extends ConfigService {
  override readonly ENV: EnvironmentSchema;

  constructor(private _logger: LoggerService) {
    super();

    dotenv();

    this._envSchema.load({});
    this._envSchema.validate({
      allowed: "strict",
      output: (message) => {
        this._logger.warn(message);
      },
    });

    this.ENV = this._envSchema.get();

    this._logger.info("ConfigService initialized");
  }

  private get _envSchema(): ConvictConfig<EnvironmentSchema> {
    return convict<EnvironmentSchema>({
      APP: {
        ENVIRONMENT: {
          format: Object.values(AppEnvironment),
          default: null,
          env: "APP_ENVIRONMENT",
        },
        PORT: {
          format: Number,
          default: null,
          env: "APP_PORT",
        },
      },
      DB: {
        CLIENT: {
          format: String,
          default: null,
          env: "DB_CLIENT",
        },
        HOST: {
          format: String,
          default: null,
          env: "DB_HOST",
        },
        PORT: {
          format: Number,
          default: null,
          env: "DB_PORT",
        },
        USER_NAME: {
          format: String,
          default: null,
          env: "DB_USER_NAME",
        },
        USER_PASSWORD: {
          format: String,
          default: null,
          env: "DB_USER_PASSWORD",
        },
        DATABASE_NAME: {
          format: String,
          default: null,
          env: "DB_DATABASE_NAME",
        },
        POOL_MIN: {
          format: Number,
          default: null,
          env: "DB_POOL_MIN",
        },
        POOL_MAX: {
          format: Number,
          default: null,
          env: "DB_POOL_MAX",
        },
      },
      JWT: {
        SECRET: {
          format: String,
          default: null,
          env: "JWT_SECRET",
        },
        EXPIRES_IN: {
          format: String,
          default: null,
          env: "JWT_EXPIRES_IN",
        },
      },
    });
  }
}
