import { Module } from "@nestjs/common";
import {
  JwtModule,
  type JwtModuleOptions,
  type JwtSignOptions,
} from "@nestjs/jwt";

import { UsersRepository } from "~/domain/repositories/index.js";
import {
  ConfigService,
  DatabaseService,
  EncryptionService,
  LoggerService,
} from "~/domain/services/index.js";

import { UserModel, UsersRepositoryImpl } from "./repositories/index.js";
import {
  ConfigServiceImpl,
  DatabaseServiceImpl,
  EncryptionServiceImpl,
  LoggerServiceImpl,
} from "./services/index.js";

@Module({
  imports: [
    JwtModule.registerAsync({
      global: true,
      imports: [InfrastructuresModule],
      inject: [ConfigService],
      useFactory(configService: ConfigService) {
        const { SECRET, EXPIRES_IN } = configService.ENV.JWT;
        const algorithm: JwtSignOptions["algorithm"] = "HS256";

        const moduleOptions: JwtModuleOptions = {
          secret: SECRET,
          signOptions: {
            algorithm,
            expiresIn: EXPIRES_IN,
          },
          verifyOptions: {
            algorithms: [algorithm],
          },
        };
        return moduleOptions;
      },
    }),
  ],
  providers: [
    { provide: UserModel, useValue: UserModel },
    { provide: UsersRepository, useClass: UsersRepositoryImpl },
    //
    { provide: LoggerService, useClass: LoggerServiceImpl },
    { provide: DatabaseService, useClass: DatabaseServiceImpl },
    { provide: EncryptionService, useClass: EncryptionServiceImpl },
    { provide: ConfigService, useClass: ConfigServiceImpl },
  ],
  exports: [
    UsersRepository,
    //
    LoggerService,
    ConfigService,
    EncryptionService,
    //
    JwtModule,
  ],
})
export class InfrastructuresModule {}
