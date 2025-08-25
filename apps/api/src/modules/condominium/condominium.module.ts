import { Module } from '@nestjs/common';
import { CondominiumController } from './condominium.controller';
import { CondominiumService } from './condominium.service';

@Module({
  controllers: [CondominiumController],
  providers: [CondominiumService],
})
export class CondominiumModule {}