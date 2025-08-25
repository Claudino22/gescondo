import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateVisitorDto } from './dto/create-visitor.dto';

const prisma = new PrismaClient();

@Injectable()
export class VisitorService {
  async preauthorize(dto: CreateVisitorDto) {
    // Gerar QR code token e criar visitante
    return prisma.visitor.create({ data: { ...dto, qrCodeToken: 'mock-token' } });
  }

  async checkin(id: number) {
    return prisma.visitor.update({ where: { id }, data: { checkIn: new Date() } });
  }

  async checkout(id: number) {
    return prisma.visitor.update({ where: { id }, data: { checkOut: new Date() } });
  }
}