import type { UseCase } from "~/use_cases/use_case.js";

import type { SignUpRequestDto, SignUpResponseDto } from "./libs/dtos/index.js";

export interface SignUpUseCase extends UseCase<SignUpResponseDto> {
  execute(requestDto: SignUpRequestDto): Promise<SignUpResponseDto>;
}
