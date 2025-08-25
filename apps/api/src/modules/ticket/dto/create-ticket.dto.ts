import { IsNumber, IsString, IsOptional } from 'class-validator';

export class CreateTicketDto {
  @IsNumber()
  unitId: number;

  @IsString()
  category: string;

  @IsString()
  priority: string;

  @IsString()
  status: string;

  @IsOptional()
  @IsString()
  sla?: string;

  @IsOptional()
  @IsNumber()
  assigneeId?: number;

  @IsOptional()
  files?: string[];
}