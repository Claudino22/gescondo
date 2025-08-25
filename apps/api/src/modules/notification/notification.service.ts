import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateNotificationDto } from './dto/create-notification.dto';

const prisma = new PrismaClient();

@Injectable()
export class NotificationService {
  async send(dto: CreateNotificationDto) {
    // Enviar por canal (email, sms, push) e salvar no banco
    return prisma.notification.create({ data: dto });
  }

  async findAll(userId?: number) {
    return prisma.notification.findMany({
      where: userId ? { userId } : {},
    });
  }
}