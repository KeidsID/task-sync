import { applyDecorators } from "@nestjs/common";
import {
  ApiBearerAuth,
  ApiBody,
  type ApiBodyOptions,
  ApiOperation,
  ApiQuery,
  type ApiQueryOptions,
  ApiResponse,
  type ApiResponseOptions,
} from "@nestjs/swagger";

type ApiDocumentationOptions = {
  request: { body?: ApiBodyOptions; query?: ApiQueryOptions };
  response: ApiResponseOptions;
  summary?: string;
  description?: string;
  hasBearerAuth?: boolean;
};

export function ApiDocumentation(
  options: ApiDocumentationOptions
): MethodDecorator {
  const {
    request: { body: requestBody, query: requestQuery },
    response,
    summary,
    description,
    hasBearerAuth,
  } = options;

  const decorators: MethodDecorator[] = [
    ...(requestBody ? [ApiBody(requestBody)] : []),
    ...(requestQuery ? [ApiQuery(requestQuery)] : []),
    ApiResponse(response),
    ApiOperation({ summary, description }),
    ...(hasBearerAuth ? [ApiBearerAuth()] : []),
  ];

  return applyDecorators(...decorators);
}
