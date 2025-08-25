import { IsString, IsDateString, IsNumber, IsOptional } from 'class-validator';

export class UpdateReservationDto {
  @IsOptional()
  @IsString()
  area?: string;

  @IsOptional()
  @IsDateString()
  date?: string;

  @IsOptional()
  @IsString()
  start?: string;

  @IsOptional()
  @IsString()
  end?: string;

  @IsOptional()
  @IsString()
  status?: string;

  @IsOptional()
  @IsNumber()
  depositAmount?: number;

  @IsOptional()
  rules?: string;
}