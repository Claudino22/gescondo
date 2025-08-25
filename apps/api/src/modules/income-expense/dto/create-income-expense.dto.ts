import { IsString, IsNumber, IsDateString, IsOptional } from 'class-validator';

export class CreateIncomeExpenseDto {
  @IsString()
  type: string;

  @IsString()
  category: string;

  @IsNumber()
  amount: number;

  @IsDateString()
  date: string;

  @IsOptional()
  @IsString()
  notes?: string;

  @IsOptional()
  file?: string;
}