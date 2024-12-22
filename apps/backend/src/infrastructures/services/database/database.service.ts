import { Injectable } from "@nestjs/common";
import knex, { type Knex } from "knex";
import { knexSnakeCaseMappers, Model } from "objection";

import {
  ConfigService,
  DatabaseService,
  LoggerService,
} from "~/domain/services/index.js";
import { AppEnvironment } from "~/libs/enums/index.js";

@Injectable()
export class DatabaseServiceImpl extends DatabaseService {
  constructor(
    private _appConfig: ConfigService,
    private _logger: LoggerService
  ) {
    super();

    Model.knex(knex(this._databaseConfig));

    this._logger.info("DatabaseService initialized");
  }

  private get _databaseConfig(): Knex.Config {
    return this.configs[this._appConfig.ENV.APP.ENVIRONMENT];
  }

  override get configs(): DatabaseService["configs"] {
    return {
      [AppEnvironment.DEVELOPMENT]: this._initialConfig,
      [AppEnvironment.PRODUCTION]: this._initialConfig,
    };
  }

  private get _initialConfig(): Knex.Config {
    const sslConfig: Knex.StaticConnectionConfig =
      this._appConfig.ENV.APP.ENVIRONMENT === AppEnvironment.DEVELOPMENT
        ? {}
        : { ssl: { rejectUnauthorized: false } };

    return {
      client: this._appConfig.ENV.DB.CLIENT,
      connection: {
        database: this._appConfig.ENV.DB.DATABASE_NAME,
        host: this._appConfig.ENV.DB.HOST,
        password: this._appConfig.ENV.DB.USER_PASSWORD,
        port: this._appConfig.ENV.DB.PORT,
        user: this._appConfig.ENV.DB.USER_NAME,
        ...sslConfig,
      },
      debug: false,
      pool: {
        max: this._appConfig.ENV.DB.POOL_MAX,
        min: this._appConfig.ENV.DB.POOL_MIN,
      },
      migrations: {
        directory: "./db/migrations",
      },
      ...knexSnakeCaseMappers({ underscoreBetweenUppercaseLetters: true }),
    };
  }
}
