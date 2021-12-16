import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configuration = new DocumentBuilder()
    .setTitle('ARSENICUM')
    .setDescription('Sistema de Gestão Financeira')
    .setVersion('v1.0.0')
    .addTag('ARSENICUM')
    .build();
  const document = SwaggerModule.createDocument(app, configuration);
  SwaggerModule.setup('api', app, document);
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
