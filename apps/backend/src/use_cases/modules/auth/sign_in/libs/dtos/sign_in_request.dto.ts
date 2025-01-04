import { PickType } from "@nestjs/swagger";
import { type SignInRequestDto as SignInRequestDtoType } from "shared";

import { User } from "~/domain/entities/index.js";

export class SignInRequestDto
  extends PickType(User, ["email", "password"])
  implements SignInRequestDtoType {}
