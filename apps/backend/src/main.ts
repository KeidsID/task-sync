import { BadRequestException, ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

import { ApiPath, AppPath } from "~/interfaces/libs/enums/index.js";
import { CommonNumber } from "~/libs/enums/index.js";

import { AppModule } from "./app.module.js";
import { ConfigService, LoggerService } from "./domain/services/index.js";
import { HttpExceptionFilter } from "./interfaces/libs/filters/index.js";

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix(AppPath.API, { exclude: [AppPath.ROOT] });
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(
    new ValidationPipe({
      stopAtFirstError: false,
      exceptionFactory: (errors): unknown => {
        return new BadRequestException("Validation error", {
          cause:
            errors.length <= CommonNumber.ONE
              ? (errors[CommonNumber.ZERO] ?? undefined)
              : errors,
        });
      },
    })
  );

  SwaggerModule.setup(AppPath.DOCS, app, () => {
    return SwaggerModule.createDocument(
      app,
      new DocumentBuilder()
        .setTitle("task-sync APIs")
        .setVersion("v1")
        .addServer(AppPath.API)
        .addBearerAuth()
        .addTag(ApiPath.AUTH, "Endpoints related to authentication")
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
