import type { User } from "~/domain/entities/index.js";

export type SignInRequestDto = Pick<User, "email" | "password">;
