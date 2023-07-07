import { NestFactory } from '@nestjs/core';
import { ResultModule } from './result.module';

async function bootstrap() {
  const app = await NestFactory.create(ResultModule);
  await app.listen(3000);
}
bootstrap();
