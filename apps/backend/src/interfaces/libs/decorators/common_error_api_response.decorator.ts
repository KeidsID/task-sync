import { applyDecorators, type HttpStatus } from "@nestjs/common";
import { ApiResponse } from "@nestjs/swagger";

import { type ValueOf } from "~/libs/types/index.js";

import { CommonErrorDto } from "../dtos/index.js";

export function CommonErrorApiResponse(
  status: ValueOf<typeof HttpStatus>,
  description: string
): MethodDecorator {
  return applyDecorators(
    ApiResponse({ status, description, type: CommonErrorDto })
  );
}
