import { Module } from "@nestjs/common";

import { AuthModule } from "./modules/index.js";

@Module({
  imports: [AuthModule],
})
export class InterfacesModule {}
