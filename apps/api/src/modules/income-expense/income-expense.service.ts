import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateIncomeExpenseDto } from './dto/create-income-expense.dto';

const prisma = new PrismaClient();

@Injectable()
export class IncomeExpenseService {
  async findAll() {
    return prisma.incomeExpense.findMany();
  }

  async create(dto: CreateIncomeExpenseDto) {
    return prisma.incomeExpense.create({ data: dto });
  }
}