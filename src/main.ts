import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Constants
const PORT = process.env.PORT || 3002;
const HOST = '127.0.0.1';

  await app.listen(PORT);
  //await app.listen(PORT, HOST);
  console.log(`Running on http://${HOST}:${PORT}`);
}
bootstrap();
