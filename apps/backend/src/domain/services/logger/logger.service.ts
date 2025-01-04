export type LoggerFunction = (
  message: string,
  ...parameters: unknown[]
) => void;

export abstract class LoggerService {
  abstract readonly debug: LoggerFunction;
  abstract readonly info: LoggerFunction;
  abstract readonly warn: LoggerFunction;
  abstract readonly error: LoggerFunction;
}
