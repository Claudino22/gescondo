import { IsString, IsOptional } from 'class-validator';

export class CreateCondominiumDto {
  @IsString()
  name: string;

  @IsString()
  address: string;

  @IsOptional()
  @IsString()
  cnpj?: string;
}