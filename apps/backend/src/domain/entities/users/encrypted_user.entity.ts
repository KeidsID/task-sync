import { ApiHideProperty, OmitType } from "@nestjs/swagger";

import { User } from "./user.entity.js";

export class EncryptedUser extends OmitType(User, ["password"]) {
  @ApiHideProperty()
  passwordHash!: string;

  @ApiHideProperty()
  passwordSalt!: string;
}
