import { Module } from "@nestjs/common";

import { AppController } from "./app.controller.js";
import { AppService } from "./app.service.js";
import { InfrastructuresModule } from "./infrastructures/index.js";

@Module({
  imports: [InfrastructuresModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
