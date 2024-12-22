import { Module } from "@nestjs/common";

import {
  ConfigService,
  DatabaseService,
  LoggerService,
} from "~/domain/services/index.js";

import {
  ConfigServiceImpl,
  DatabaseServiceImpl,
  LoggerServiceImpl,
} from "./services/index.js";

@Module({
  providers: [
    { provide: LoggerService, useClass: LoggerServiceImpl },
    { provide: DatabaseService, useClass: DatabaseServiceImpl },
    { provide: ConfigService, useClass: ConfigServiceImpl },
  ],
  exports: [LoggerService, ConfigService],
})
export class InfrastructuresModule {}
