import { applyDecorators, Controller } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

/**
 * Decorator that marks a class as {@link Controller} with {@link ApiTags}.
 * Will apply `basePath` as a tag by default.
 */
export function ControllerWithTags(
  basePath: string,
  tags: string[] = [basePath]
): ClassDecorator {
  return applyDecorators(Controller(basePath), ApiTags(...tags));
}
