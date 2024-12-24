import { NestFactory } from "@nestjs/core";

import { AppModule } from "./app.module.js";
import { ConfigService, LoggerService } from "./domain/services/index.js";

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  const PORT = app.get(ConfigService).ENV.APP.PORT;
  const logger = app.get(LoggerService);

  await app.listen(PORT, () => {
    logger.info(`Server running on port ${PORT.toString()}`);
  });
}
void bootstrap();
