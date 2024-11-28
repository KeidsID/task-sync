import { NestFactory } from "@nestjs/core";

import { AppModule } from "./app.module.js";

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  const PORT = 3000;
  await app.listen(process.env.PORT ?? PORT);
}
void bootstrap();
