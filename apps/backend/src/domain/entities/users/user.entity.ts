import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsEmail, IsString, Length, Matches } from "class-validator";
import { type User as UserType } from "shared";

import {
  NAME_MIN_LENGTH,
  PASSWORD_MIN_LENGTH,
  PASSWORD_REGEX,
} from "~/libs/constants/index.js";

export class User implements UserType {
  @IsString()
  @ApiProperty()
  id!: string;

  @IsDate()
  @ApiProperty()
  createdAt!: Date;

  @IsDate()
  @ApiProperty()
  updatedAt!: Date;

  @IsEmail()
  @ApiProperty({ format: "email", example: "john.doe@example.com" })
  email!: string;

  @IsString()
  @Length(PASSWORD_MIN_LENGTH)
  @Matches(PASSWORD_REGEX)
  @ApiProperty({ example: "superSecretPass" })
  password!: string;

  @IsString()
  @Length(NAME_MIN_LENGTH)
  @ApiProperty({ example: "John Doe" })
  name!: string;
}
