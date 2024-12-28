import { ApiProperty } from "@nestjs/swagger";
import { type ResponseDto } from "shared";

class CommonErrorDtoError {
  @ApiProperty({ example: "Internal Server Error" })
  message!: string;

  @ApiProperty()
  details?: unknown;
}

export class CommonErrorDto implements ResponseDto {
  @ApiProperty({ example: false })
  success!: boolean;

  @ApiProperty()
  error!: CommonErrorDtoError;
}
