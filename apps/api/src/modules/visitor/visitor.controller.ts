import { Controller, Post, Body, Param } from '@nestjs/common';
import { VisitorService } from './visitor.service';
import { CreateVisitorDto } from './dto/create-visitor.dto';

@Controller('visitors')
export class VisitorController {
  constructor(private readonly service: VisitorService) {}

  @Post('preauthorize')
  preauthorize(@Body() dto: CreateVisitorDto) {
    return this.service.preauthorize(dto);
  }

  @Post(':id/checkin')
  checkin(@Param('id') id: string) {
    return this.service.checkin(Number(id));
  }

  @Post(':id/checkout')
  checkout(@Param('id') id: string) {
    return this.service.checkout(Number(id));
  }
}