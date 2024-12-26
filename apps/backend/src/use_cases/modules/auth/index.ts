import { Module } from "@nestjs/common";

import { InfrastructuresModule } from "~/infrastructures/index.js";

import { SignInUseCase } from "./sign_in/index.js";
import { SignUpUseCase } from "./sign_up/index.js";

@Module({
  imports: [InfrastructuresModule],
  providers: [SignInUseCase, SignUpUseCase],
  exports: [SignInUseCase, SignUpUseCase],
})
export class AuthUseCasesModule {}

export * from "./sign_in/index.js";
export * from "./sign_up/index.js";
