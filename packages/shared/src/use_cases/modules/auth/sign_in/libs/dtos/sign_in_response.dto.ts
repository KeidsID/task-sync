import type { ResponseDto } from "~/libs/dtos/response.dto.js";

export type SignInResponseDto = ResponseDto<{ authToken: string }>;
