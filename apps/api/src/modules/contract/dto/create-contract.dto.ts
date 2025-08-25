import { IsNumber, IsDateString, IsString, IsOptional } from 'class-validator';

export class CreateContractDto {
  @IsNumber()
  providerId: number;

  @IsDateString()
  startDate: string;

  @IsDateString()
  endDate: string;

  @IsNumber()
  value: number;

  @IsString()
  sla: string;

  @IsOptional()
  files?: string[];
}