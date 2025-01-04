import { Controller, Get, Redirect } from "@nestjs/common";
import { ApiExcludeController } from "@nestjs/swagger";

import { AppPath } from "./interfaces/libs/enums/index.js";

@Controller()
@ApiExcludeController()
export class AppController {
  @Get()
  @Redirect(AppPath.DOCS)
  redirectToDocoumentation(): string {
    return "redirect to documentation";
  }
}
