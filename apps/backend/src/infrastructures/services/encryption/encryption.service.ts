import { Injectable } from "@nestjs/common";
import bcrypt from "bcrypt";

import {
  EncryptionService,
  type EncryptionValue,
} from "~/domain/services/index.js";

const SALT_ROUNDS = 10;

@Injectable()
export class EncryptionServiceImpl extends EncryptionService {
  override async encrypt(value: string): Promise<EncryptionValue> {
    const salt = await this._generateSalt();
    const hash = await this._hash(value, salt);

    return { hash, salt };
  }

  override async verify(
    value: string,
    encryptedValue: EncryptionValue
  ): Promise<boolean> {
    const { hash, salt } = encryptedValue;
    const generatedHash = await this._hash(value, salt);

    return hash === generatedHash;
  }

  private _generateSalt(): Promise<string> {
    return bcrypt.genSalt(SALT_ROUNDS);
  }

  private _hash(value: string, salt: string): Promise<string> {
    return bcrypt.hash(value, salt);
  }
}
