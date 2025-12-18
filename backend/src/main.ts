import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as fs from 'fs';
import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Enable CORS
  app.enableCors();
  
  // Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('Hackathon Aid Worker & Refugee API')
    .setDescription('API documentation for managing aid workers and refugees. This API provides full CRUD operations for both aid workers and refugees, with filtering capabilities.')
    .setVersion('1.0')
    .addTag('aidworker', 'Aid Worker management endpoints')
    .addTag('refugee', 'Refugee management endpoints')
    .build();
  
  const document = SwaggerModule.createDocument(app, config);
  
  // Setup Swagger UI at /api/docs
  SwaggerModule.setup('api/docs', app, document, {
    customSiteTitle: 'Hackathon API Documentation',
    customfavIcon: 'https://nestjs.com/img/logo_text.svg',
    customCss: '.swagger-ui .topbar { display: none }',
  });
  
  // Save OpenAPI JSON to docs directory
  const docsDir = path.join(__dirname, '..', 'docs');
  if (!fs.existsSync(docsDir)) {
    fs.mkdirSync(docsDir, { recursive: true });
  }
  fs.writeFileSync(
    path.join(docsDir, 'openapi.json'),
    JSON.stringify(document, null, 2),
  );
  
  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}`);
  console.log(`Swagger documentation available at: http://localhost:${port}/api/docs`);
}
bootstrap();
