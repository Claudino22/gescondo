import { IsString, IsDateString, IsNumber, IsOptional } from 'class-validator';

export class CreateReservationDto {
  @IsString()
  area: string;

  @IsDateString()
  date: string;

  @IsString()
  start: string;

  @IsString()
  end: string;

  @IsString()
  status: string;

  @IsOptional()
  @IsNumber()
  depositAmount?: number;

  @IsOptional()
  rules?: string;
}