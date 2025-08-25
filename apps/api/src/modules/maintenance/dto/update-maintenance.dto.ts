import { IsString, IsDateString, IsNumber, IsOptional } from 'class-validator';

export class UpdateMaintenanceDto {
  @IsOptional()
  @