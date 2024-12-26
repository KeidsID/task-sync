import { Module } from "@nestjs/common";

import { AppController } from "./app.controller.js";
import { InfrastructuresModule } from "./infrastructures/index.js";

@Module({
  imports: [InfrastructuresModule],
  controllers: [AppController],
})
export class AppModule {}
