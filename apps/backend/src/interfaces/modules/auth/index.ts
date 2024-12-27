import { Module } from "@nestjs/common";

import { UseCasesModule } from "~/use_cases/index.js";

import { AuthController } from "./auth.controller.js";

@Module({
  imports: [UseCasesModule],
  controllers: [AuthController],
})
export class AuthModule {}

export { AuthController } from "./auth.controller.js";
