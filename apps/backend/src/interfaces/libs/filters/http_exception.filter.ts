import {
  ArgumentsHost,
  Catch,
  type ExceptionFilter,
  HttpException,
  HttpStatus,
} from "@nestjs/common";
import { type Response } from "express";

import { CommonErrorDto } from "../dtos/index.js";

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost): void {
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();

    if (exception instanceof Error) {
      if (exception instanceof HttpException) {
        const status = exception.getStatus();
        const exceptionDto = exception.getResponse();
        const exceptionCause = exception.cause;

        if (this._isExceptionDto(exceptionDto)) {
          return void response.status(status).json(exceptionDto);
        }

        return void response.status(status).json({
          success: false,
          error: {
            message: exception.message,
            ...(exceptionCause ? { details: exceptionCause } : {}),
          },
        } satisfies CommonErrorDto);
      }

      return void response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        success: false,
        error: {
          message: exception.message,
          details: exception,
        },
      } satisfies CommonErrorDto);
    }

    response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      error: {
        message: "Something went wrong",
        details: exception,
      },
    } satisfies CommonErrorDto);
  }

  private _isExceptionDto(value: unknown): value is CommonErrorDto {
    if (!value) return false;

    return typeof value === "object"
      ? "success" in value && value.success === false
      : false;
  }
}
