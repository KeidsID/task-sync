import { ApiProperty, OmitType } from "@nestjs/swagger";
import { type SignUpResponseDto as SignUpResponseDtoType } from "shared";

import { User } from "~/domain/entities/index.js";

class SignUpResponseDtoDataCreatedUser extends OmitType(User, ["password"]) {}

class SignUpResponseDtoData {
  @ApiProperty({ example: "auth.token.example" })
  authToken!: string;

  @ApiProperty()
  createdUser!: SignUpResponseDtoDataCreatedUser;
}

export class SignUpResponseDto implements SignUpResponseDtoType {
  @ApiProperty()
  success!: boolean;

  @ApiProperty({ type: SignUpResponseDtoData })
  data!: SignUpResponseDtoData;
}
