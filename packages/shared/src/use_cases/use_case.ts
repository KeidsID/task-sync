import { type ResponseDto } from "~/libs/dtos/index.js";

export interface UseCase<R extends ResponseDto = ResponseDto> {
  execute(...parameters: unknown[]): Promise<R>;
}
