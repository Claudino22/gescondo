import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateUnitDto } from './dto/create-unit.dto';
import { UpdateUnitDto } from './dto/update-unit.dto';

const prisma = new PrismaClient();

@Injectable()
export class UnitService {
  async findAll(condominiumId?: number) {
    if (condominiumId) {
      return prisma.unit.findMany({
        where: { block: { condominiumId } },
        include: { block: true }
      });
    }
    return prisma.unit.findMany({ include: { block: true } });
  }

  async create(dto: CreateUnitDto) {
    return prisma.unit.create({ data: dto });
  }

  async update(id: number, dto: UpdateUnitDto) {
    return prisma.unit.update({ where: { id }, data: dto });
  }
}