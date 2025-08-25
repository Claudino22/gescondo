import { IsString, IsDateString, IsNumber, IsOptional } from 'class-validator';

export class CreateMaintenanceDto {
  @IsString()
  type: string;

  @IsString()
  asset: string;

  @IsDateString()
  schedule: string;

  @IsString()
  status: string;

  @IsNumber()
  responsibleId: number;

  @IsOptional()
  checklist?: string[];
}