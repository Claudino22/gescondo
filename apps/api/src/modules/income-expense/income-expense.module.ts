import { Module } from '@nestjs/common';
import { IncomeExpenseController } from './income-expense.controller';
import { IncomeExpenseService } from './income-expense.service';

@Module({
  controllers: [IncomeExpenseController],
  providers: [IncomeExpenseService],
})
export class IncomeExpenseModule {}