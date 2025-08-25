import { IsNumber, IsString, IsOptional } from 'class-validator';

export class UpdateTicketDto {
  @IsOptional()
  @IsNumber()
  unitId?: number;

  @IsOptional()
  @IsString()
  category?: string;

  @IsOptional()
  @IsString()
  priority?: string;

  @IsOptional()
  @IsString()
  status?: string;

  @IsOptional()
  @IsString()
  sla?: string;

  @IsOptional()
  @IsNumber()
  assigneeId?: number;

  @IsOptional()
  files?: string[];
}