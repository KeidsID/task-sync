import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

import { AppPath } from "~/interfaces/libs/enums/index.js";

import { AppModule } from "./app.module.js";
import { ConfigService, LoggerService } from "./domain/services/index.js";

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix(AppPath.API, { exclude: [AppPath.ROOT] });

  SwaggerModule.setup(AppPath.DOCS, app, () => {
    return SwaggerModule.createDocument(
      app,
      new DocumentBuilder()
        .setTitle("task-sync APIs")
        .setVersion("v1")
        .addServer(AppPath.API)
        .addBearerAuth()
        .build(),
      { ignoreGlobalPrefix: true }
    );
  });

  const PORT = app.get(ConfigService).ENV.APP.PORT;
  const logger = app.get(LoggerService);

  await app.listen(PORT, () => {
    logger.info(`Server running on port ${PORT.toString()}`);
  });
}
void bootstrap();
