import { Body, Post } from "@nestjs/common";

import {
  ApiDocumentation,
  ControllerWithTags,
} from "~/interfaces/libs/decorators/index.js";
import { ApiPath, HttpStatus } from "~/interfaces/libs/enums/index.js";
import {
  SignInRequestDto,
  SignInResponseDto,
  SignInUseCase,
  SignUpRequestDto,
  SignUpResponseDto,
  SignUpUseCase,
} from "~/use_cases/index.js";

import { AuthApiPath } from "./libs/enums/index.js";

@ControllerWithTags(ApiPath.AUTH)
export class AuthController {
  constructor(
    private _signInUseCase: SignInUseCase,
    private _signUpUseCase: SignUpUseCase
  ) {}

  @Post(AuthApiPath.SIGN_IN)
  @ApiDocumentation({
    summary: "Authenticate with email and password",
    request: { body: { type: SignInRequestDto } },
    response: { status: HttpStatus.OK, type: SignInResponseDto },
  })
  async signIn(
    @Body() requestDto: SignInRequestDto
  ): Promise<SignInResponseDto> {
    return await this._signInUseCase.execute(requestDto);
  }

  @Post(AuthApiPath.SIGN_UP)
  @ApiDocumentation({
    summary: "Authenticate as a new user",
    request: { body: { type: SignUpRequestDto } },
    response: { status: HttpStatus.CREATED, type: SignUpResponseDto },
  })
  async signUp(
    @Body() requestDto: SignUpRequestDto
  ): Promise<SignUpResponseDto> {
    return await this._signUpUseCase.execute(requestDto);
  }
}
