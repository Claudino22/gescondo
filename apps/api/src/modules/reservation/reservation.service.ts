import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';

const prisma = new PrismaClient();

@Injectable()
export class ReservationService {
  async getCalendar(area?: string, date?: string) {
    // Retorna reservas filtradas por área/data
    return prisma.reservation.findMany({
      where: {
        area: area,
        date: date ? new Date(date) : undefined,
      },
    });
  }

  async findAll() {
    return prisma.reservation.findMany();
  }

  async create(dto: CreateReservationDto) {
    // Regras de conflito e limites podem ser implementadas aqui
    return prisma.reservation.create({ data: dto });
  }

  async approve(id: number) {
    return prisma.reservation.update({ where: { id }, data: { status: 'APPROVED' } });
  }

  async update(id: number, dto: UpdateReservationDto) {
    return prisma.reservation.update({ where: { id }, data: dto });
  }
}