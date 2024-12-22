import { Module } from "@nestjs/common";

import { ConfigService, LoggerService } from "~/domain/services/index.js";

import { ConfigServiceImpl, LoggerServiceImpl } from "./services/index.js";

@Module({
  providers: [
    { provide: LoggerService, useClass: LoggerServiceImpl },
    { provide: ConfigService, useClass: ConfigServiceImpl },
  ],
  exports: [LoggerService, ConfigService],
})
export class InfrastructuresModule {}
