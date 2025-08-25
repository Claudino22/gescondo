import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';

const prisma = new PrismaClient();

@Injectable()
export class TicketService {
  async findAll(status?: string) {
    return prisma.ticket.findMany({
      where: status ? { status } : {},
    });
  }

  async create(dto: CreateTicketDto) {
    return prisma.ticket.create({ data: dto });
  }

  async update(id: number, dto: UpdateTicketDto) {
    return prisma.ticket.update({ where: { id }, data: dto });
  }
}