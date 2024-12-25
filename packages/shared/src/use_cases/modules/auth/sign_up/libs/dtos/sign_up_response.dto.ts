import { type User } from "~/domain/entities/index.js";
import { type ResponseDto } from "~/libs/dtos/response.dto.js";

export type SignUpResponseDto = ResponseDto<{
  authToken: string;
  createdUser: Omit<User, "password">;
}>;
