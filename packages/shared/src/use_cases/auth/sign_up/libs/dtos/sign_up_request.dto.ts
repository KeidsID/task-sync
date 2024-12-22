import type { Entity, User } from "~/domain/entities/index.js";

export type SignUpRequestDto = Omit<User, keyof Entity>;
