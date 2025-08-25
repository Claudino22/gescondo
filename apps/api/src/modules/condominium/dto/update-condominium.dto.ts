import { IsString, IsOptional } from 'class-validator';

export class UpdateCondominiumDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsString()
  cnpj?: string;
}