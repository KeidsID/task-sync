import { Module } from "@nestjs/common";

import { UsersRepository } from "~/domain/repositories/index.js";
import {
  ConfigService,
  DatabaseService,
  LoggerService,
} from "~/domain/services/index.js";

import { UserModel, UsersRepositoryImpl } from "./repositories/index.js";
import {
  ConfigServiceImpl,
  DatabaseServiceImpl,
  LoggerServiceImpl,
} from "./services/index.js";

@Module({
  providers: [
    { provide: UserModel, useValue: UserModel },
    { provide: UsersRepository, useClass: UsersRepositoryImpl },
    //
    { provide: LoggerService, useClass: LoggerServiceImpl },
    { provide: DatabaseService, useClass: DatabaseServiceImpl },
    { provide: ConfigService, useClass: ConfigServiceImpl },
  ],
  exports: [
    UsersRepository,
    //
    LoggerService,
    ConfigService,
  ],
})
export class InfrastructuresModule {}
