import { NestFactory } from '@nestjs/core';
import { ConsultationsModule } from './consultations.module';

async function bootstrap() {
  const app = await NestFactory.create(ConsultationsModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
