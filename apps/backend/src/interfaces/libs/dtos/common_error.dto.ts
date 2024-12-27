import { ApiProperty } from "@nestjs/swagger";
import { type ResponseDto } from "shared";

class CommonErrorDtoError {
  @ApiProperty()
  message!: string;

  @ApiProperty()
  details?: unknown;
}

export class CommonErrorDto implements ResponseDto {
  @ApiProperty()
  success!: false;

  @ApiProperty()
  error!: CommonErrorDtoError;
}
