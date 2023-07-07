import { NestFactory } from '@nestjs/core';
import { FacultyModule } from './faculty.module';

async function bootstrap() {
  const app = await NestFactory.create(FacultyModule);
  await app.listen(3000);
}
bootstrap();
