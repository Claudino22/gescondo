import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateUnitDto {
  @IsString()
  number: string;

  @IsOptional()
  @IsNumber()
  floor?: number;

  @IsNumber()
  blockId: number;

  @IsOptional()
  @IsNumber()
  ownerId?: number;

  @IsOptional()
  @IsNumber()
  areaM2?: number;
}