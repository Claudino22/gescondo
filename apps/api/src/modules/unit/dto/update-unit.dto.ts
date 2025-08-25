import { IsString, IsNumber, IsOptional } from 'class-validator';

export class UpdateUnitDto {
  @IsOptional()
  @IsString()
  number?: string;

  @IsOptional()
  @IsNumber()
  floor?: number;

  @IsOptional()
  @IsNumber()
  blockId?: number;

  @IsOptional()
  @IsNumber()
  ownerId?: number;

  @IsOptional()
  @IsNumber()
  areaM2?: number;
}