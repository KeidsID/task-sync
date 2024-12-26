import { Module } from "@nestjs/common";

import { InfrastructuresModule } from "~/infrastructures/index.js";

import { GetUserByIdUseCase } from "./get_user_by_id/index.js";

@Module({
  imports: [InfrastructuresModule],
  providers: [GetUserByIdUseCase],
  exports: [GetUserByIdUseCase],
})
export class UsersUseCasesModule {}

export * from "./get_user_by_id/index.js";
