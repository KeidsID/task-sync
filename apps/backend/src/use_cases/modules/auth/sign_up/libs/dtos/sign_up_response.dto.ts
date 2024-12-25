import { type SignUpResponseDto as SignUpResponseDtoType } from "shared";

import { type User } from "~/domain/entities/index.js";

class SignUpResponseDtoData {
  authToken!: string;
  createdUser!: Omit<User, "password">;
}

export class SignUpResponseDto implements SignUpResponseDtoType {
  success!: boolean;
  data!: SignUpResponseDtoData;
}
