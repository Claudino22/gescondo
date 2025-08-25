import { Controller, Get, Post, Body } from '@nestjs/common';
import { IncomeExpenseService } from './income-expense.service';
import { CreateIncomeExpenseDto } from './dto/create-income-expense.dto';

@Controller('income-expense')
export class IncomeExpenseController {
  constructor(private readonly service: IncomeExpenseService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post()
  create(@Body() dto: CreateIncomeExpenseDto) {
    return this.service.create(dto);
  }
}