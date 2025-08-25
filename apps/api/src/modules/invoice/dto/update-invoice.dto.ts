import { IsNumber, IsDateString, IsString, IsOptional } from 'class-validator';

export class UpdateInvoiceDto {
  @IsOptional()
  @IsNumber()
  unitId?: number;

  @IsOptional()
  @IsDateString()
  dueDate?: string;

  @IsOptional()
  @IsNumber()
  amount?: number;

  @IsOptional()
  @IsString()
  status?: string;

  @IsOptional()
  @IsString()
  barcode?: string;

  @IsOptional()
  @IsString()
  pix?: string;

  @IsOptional()
  @IsString()
  paymentIntentId?: string;
}