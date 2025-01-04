import { OmitType } from "@nestjs/swagger";
import { type SignUpRequestDto as SignUpRequestDtoType } from "shared";

import { User } from "~/domain/entities/index.js";

export class SignUpRequestDto
  extends OmitType(User, ["id", "createdAt", "updatedAt"])
  implements SignUpRequestDtoType {}
