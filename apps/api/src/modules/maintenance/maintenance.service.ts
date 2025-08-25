import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateMaintenanceDto } from './dto/create-maintenance.dto';
import { UpdateMaintenanceDto } from './dto/update-maintenance.dto';

const prisma = new PrismaClient();

@Injectable()
export class MaintenanceService {
  async findAll() {
    return prisma.maintenance.findMany();
  }

  async create(dto: CreateMaintenanceDto) {
    return prisma.maintenance.create({ data: dto });
  }

  async update(id: number, dto: UpdateMaintenanceDto) {
    return prisma.maintenance.update({ where: { id }, data: dto });
  }
}