import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { RequestLogger } from './shared/interceptors/logger.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new RequestLogger());

  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });

  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('Hospital Microservice API')
    .setDescription('The API to manage hospital auth.')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('cs/docs', app, document);

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
