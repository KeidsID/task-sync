import { Module } from "@nestjs/common";

import { AppController } from "./app.controller.js";
import { InfrastructuresModule } from "./infrastructures/index.js";
import { InterfacesModule } from "./interfaces/index.js";

@Module({
  imports: [InfrastructuresModule, InterfacesModule],
  controllers: [AppController],
})
export class AppModule {}
