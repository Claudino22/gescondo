import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('GESCONDO API')
  .setDescription('API do Sistema de Gestão de Condomínios')
  .setVersion('1.0')
  .addBearerAuth()
  .build();