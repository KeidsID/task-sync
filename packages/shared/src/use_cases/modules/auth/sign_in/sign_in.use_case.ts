import { type UseCase } from "~/use_cases/libs/types/index.js";

import type { SignInRequestDto, SignInResponseDto } from "./libs/dtos/index.js";

export interface SignInUseCase extends UseCase<SignInResponseDto> {
  execute(requestDto: SignInRequestDto): Promise<SignInResponseDto>;
}
