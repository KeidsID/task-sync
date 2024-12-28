import { Injectable, UnauthorizedException } from "@nestjs/common";
import { type UseCase } from "shared";

import { UsersRepository } from "~/domain/repositories/index.js";

import { type GetUserByIdResponseDto } from "./libs/dtos/index.js";

@Injectable()
export class GetUserByIdUseCase implements UseCase<GetUserByIdResponseDto> {
  constructor(private _usersRepository: UsersRepository) {}

  async execute(id: string): Promise<GetUserByIdResponseDto> {
    const user = await this._usersRepository.read({ id });

    if (!user) {
      throw new UnauthorizedException(
        "User not found, it may have been deleted"
      );
    }

    return {
      success: true,
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
    };
  }
}
