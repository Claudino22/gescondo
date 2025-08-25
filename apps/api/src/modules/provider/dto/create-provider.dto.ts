import { IsString, IsOptional, IsNumber } from 'class-validator';

export class CreateProviderDto {
  @IsString()
  name: string;

  @IsString()
  category: string;

  @IsString()
  contact: string;

  @IsOptional()
  @IsNumber()
  contractId?: number;
}import { Module } from '@nestjs/common';
import { ProviderController } from './provider.controller';
import { ProviderService } from './provider.service';

@Module({
  controllers: [ProviderController],
  providers: [ProviderService],
})
export class ProviderModule {}