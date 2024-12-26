import { OmitType } from "@nestjs/swagger";
import { type ResponseDto } from "shared";

import { User } from "~/domain/entities/index.js";

class GetUserByIdResponseDtoData extends OmitType(User, ["password"]) {}

export class GetUserByIdResponseDto
  implements ResponseDto<GetUserByIdResponseDtoData>
{
  success!: boolean;
  data!: GetUserByIdResponseDtoData;
}
