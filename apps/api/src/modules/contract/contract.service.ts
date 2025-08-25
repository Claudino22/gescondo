import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateContractDto } from './dto/create-contract.dto';

const prisma = new PrismaClient();

@Injectable()
export class ContractService {
  async findAll() {
    return prisma.contract.findMany();
  }

  async create(dto: CreateContractDto) {
    return prisma.contract.create({ data: dto });
  }
}