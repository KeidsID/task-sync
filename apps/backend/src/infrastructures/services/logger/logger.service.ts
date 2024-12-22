import { Injectable } from "@nestjs/common";
import { pino, Logger as PinoLogger } from "pino";
import pinoPretty from "pino-pretty";

import { LoggerService } from "~/domain/services/logger/index.js";

@Injectable()
export class LoggerServiceImpl extends LoggerService {
  private _logger: PinoLogger;

  constructor() {
    super();

    this._logger = pino(pinoPretty());

    this.info(`LoggerService initialized`);
  }

  readonly debug: LoggerService["debug"] = (message, ...parameters) => {
    this._logger.debug(message, ...parameters);
  };

  readonly info: LoggerService["info"] = (message, ...parameters) => {
    this._logger.info(message, ...parameters);
  };

  readonly warn: LoggerService["warn"] = (message, ...parameters) => {
    this._logger.warn(message, ...parameters);
  };

  readonly error: LoggerService["error"] = (message, ...parameters) => {
    this._logger.error(message, ...parameters);
  };
}
