import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateProviderDto } from './dto/create-provider.dto';

const prisma = new PrismaClient();

@Injectable()
export class ProviderService {
  async findAll() {
    return prisma.provider.findMany();
  }

  async create(dto: CreateProviderDto) {
    return prisma.provider.create({ data: dto });
  }
}