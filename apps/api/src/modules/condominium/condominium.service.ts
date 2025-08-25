import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateCondominiumDto } from './dto/create-condominium.dto';
import { UpdateCondominiumDto } from './dto/update-condominium.dto';

const prisma = new PrismaClient();

@Injectable()
export class CondominiumService {
  async findAll() {
    return prisma.condominium.findMany({ include: { blocks: true } });
  }

  async create(dto: CreateCondominiumDto) {
    return prisma.condominium.create({ data: dto });
  }

  async update(id: number, dto: UpdateCondominiumDto) {
    return prisma.condominium.update({ where: { id }, data: dto });
  }
}