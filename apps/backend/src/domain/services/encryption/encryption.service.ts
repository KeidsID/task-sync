export type EncryptionValue = { hash: string; salt: string };

export abstract class EncryptionService {
  abstract encrypt(value: string): Promise<EncryptionValue>;
  abstract verify(
    value: string,
    encryptedValue: EncryptionValue
  ): Promise<boolean>;
}
