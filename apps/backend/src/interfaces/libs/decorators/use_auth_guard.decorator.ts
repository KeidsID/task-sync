import { applyDecorators, UseGuards } from "@nestjs/common";
import { ApiBearerAuth } from "@nestjs/swagger";

import { AuthGuard } from "../guards/index.js";

/**
 * Decorator that binds {@link AuthGuard} to the scope of the controller or
 * method.
 */
export function UseAuthGuard(): MethodDecorator & ClassDecorator {
  return applyDecorators(UseGuards(AuthGuard), ApiBearerAuth());
}
