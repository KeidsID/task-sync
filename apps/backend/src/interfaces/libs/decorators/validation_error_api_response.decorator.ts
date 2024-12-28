import { applyDecorators } from "@nestjs/common";

import { HttpStatus } from "../enums/index.js";
import { CommonErrorApiResponse } from "./common_error_api_response.decorator.js";

export function ValidationErrorApiResponse(
  description: string = "Validation error"
): MethodDecorator {
  return applyDecorators(
    CommonErrorApiResponse(HttpStatus.BAD_REQUEST, description)
  );
}
