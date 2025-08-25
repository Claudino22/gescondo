import { IsNumber, IsDateString, IsString, IsOptional } from 'class-validator';

export class CreateInvoiceDto {
  @IsNumber()
  unitId: number;

  @IsDateString()
  dueDate: string;

  @IsNumber()
  amount: number;

  @IsString()
  status: string;

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