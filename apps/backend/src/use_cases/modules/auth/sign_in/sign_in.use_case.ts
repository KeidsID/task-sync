import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { SignInUseCase as SignInUseCaseType } from "shared";

import { UsersRepository } from "~/domain/repositories/index.js";
import { EncryptionService } from "~/domain/services/index.js";
import { type AppJwtPayload } from "~/libs/types/index.js";

import { SignInRequestDto, SignInResponseDto } from "./libs/dtos/index.js";

@Injectable()
export class SignInUseCase implements SignInUseCaseType {
  constructor(
    private _usersRepository: UsersRepository,
    private _encryptionService: EncryptionService,
    private _jwtService: JwtService
  ) {}

  async execute(requestDto: SignInRequestDto): Promise<SignInResponseDto> {
    const { email, password } = requestDto;
    const user = await this._usersRepository.read({ email });

    if (!user) {
      throw new UnauthorizedException("User not found");
    }

    const isValidPassword = await this._encryptionService.verify(password, {
      hash: user.passwordHash,
      salt: user.passwordSalt,
    });

    if (!isValidPassword) {
      throw new UnauthorizedException("Invalid credentials");
    }

    const authToken = await this._jwtService.signAsync({
      userId: user.id,
    } satisfies AppJwtPayload);

    return {
      success: true,
      data: { authToken },
    };
  }
}
