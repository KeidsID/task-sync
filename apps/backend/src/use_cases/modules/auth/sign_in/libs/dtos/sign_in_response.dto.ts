import { type SignInResponseDto as SignInResponseDtoType } from "shared";

class SignInResponseDtoData {
  authToken!: string;
}

export class SignInResponseDto implements SignInResponseDtoType {
  success!: boolean;
  data!: SignInResponseDtoData;
}
