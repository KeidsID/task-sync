import { Injectable, UnprocessableEntityException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { SignUpUseCase as SignUpUseCaseType } from "shared";

import { UsersRepository } from "~/domain/repositories/index.js";
import { EncryptionService } from "~/domain/services/index.js";
import { type AppJwtPayload } from "~/libs/types/index.js";

import { SignUpRequestDto, SignUpResponseDto } from "./libs/dtos/index.js";

@Injectable()
export class SignUpUseCase implements SignUpUseCaseType {
  constructor(
    private _usersRepository: UsersRepository,
    private _encryptionService: EncryptionService,
    private _jwtService: JwtService
  ) {}

  async execute(requestDto: SignUpRequestDto): Promise<SignUpResponseDto> {
    const { email, name, password } = requestDto;

    const emailQueryUser = await this._usersRepository.read({ email });

    if (emailQueryUser) {
      throw new UnprocessableEntityException("Email already used");
    }

    const { hash, salt } = await this._encryptionService.encrypt(password);

    const user = await this._usersRepository.create({
      email,
      name,
      passwordHash: hash,
      passwordSalt: salt,
    });

    const authToken = await this._jwtService.signAsync({
      userId: user.id,
    } satisfies AppJwtPayload);

    return {
      success: true,
      data: {
        authToken,
        createdUser: {
          id: user.id,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
          email: user.email,
          name: user.name,
        },
      },
    };
  }
}
