import { Body, Get, Post, Req } from "@nestjs/common";
import { type Request } from "express";

import {
  ApiDocumentation,
  CommonErrorApiResponse,
  ControllerWithTags,
  UseAuthGuard,
  ValidationErrorApiResponse,
} from "~/interfaces/libs/decorators/index.js";
import { ApiPath, HttpStatus } from "~/interfaces/libs/enums/index.js";
import {
  GetUserByIdResponseDto,
  GetUserByIdUseCase,
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
    private readonly _signInUseCase: SignInUseCase,
    private readonly _signUpUseCase: SignUpUseCase,
    private readonly _getUserByIdUseCase: GetUserByIdUseCase
  ) {}

  @Post(AuthApiPath.SIGN_IN)
  @ApiDocumentation({
    summary: "Authenticate with email and password",
    request: { body: { type: SignInRequestDto } },
    response: { status: HttpStatus.OK, type: SignInResponseDto },
  })
  @ValidationErrorApiResponse()
  @CommonErrorApiResponse(HttpStatus.UNAUTHORIZED, "Invalid credentials")
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
  @ValidationErrorApiResponse()
  @CommonErrorApiResponse(HttpStatus.UNPROCESSABLE_ENTITY, "Email already used")
  async signUp(
    @Body() requestDto: SignUpRequestDto
  ): Promise<SignUpResponseDto> {
    return await this._signUpUseCase.execute(requestDto);
  }

  @Get(AuthApiPath.ROOT)
  @UseAuthGuard()
  @ApiDocumentation({
    summary: "Get user details from auth token",
    request: {},
    response: { status: HttpStatus.OK, type: GetUserByIdResponseDto },
  })
  @CommonErrorApiResponse(HttpStatus.UNAUTHORIZED, "User not found")
  async getAuth(@Req() request: Request): Promise<GetUserByIdResponseDto> {
    const userId = request.userId!;

    return await this._getUserByIdUseCase.execute(userId);
  }
}
