import { ApiProperty } from "@nestjs/swagger";
import { type SignInResponseDto as SignInResponseDtoType } from "shared";

class SignInResponseDtoData {
  @ApiProperty({ example: "auth.token.example" })
  authToken!: string;
}

export class SignInResponseDto implements SignInResponseDtoType {
  @ApiProperty()
  success!: boolean;

  @ApiProperty()
  data!: SignInResponseDtoData;
}
