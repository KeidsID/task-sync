import { Module } from "@nestjs/common";

import { AuthUseCasesModule, UsersUseCasesModule } from "./modules/index.js";

@Module({
  imports: [AuthUseCasesModule, UsersUseCasesModule],
  exports: [AuthUseCasesModule, UsersUseCasesModule],
})
export class UseCasesModule {}

export * from "./modules/index.js";
