/* eslint-disable import/no-default-export */
import {
  ConfigServiceImpl,
  DatabaseServiceImpl,
  LoggerServiceImpl,
} from "./src/infrastructures/services/index.js";

const logger = new LoggerServiceImpl();
const config = new ConfigServiceImpl(logger);
const databaseService = new DatabaseServiceImpl(config, logger);

export default databaseService.configs;
