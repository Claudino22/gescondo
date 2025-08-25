import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateVisitorDto {
  @IsString()
  name: string;

  @IsString()
  document: string;

  @IsNumber()
  unitId: number;

  @IsOptional()
  @IsNumber()
  preAuthorizedById?: number;
}