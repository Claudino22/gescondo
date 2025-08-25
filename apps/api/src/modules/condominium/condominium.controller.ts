import { Controller, Get, Post, Body, Param, Patch } from '@nestjs/common';
import { CondominiumService } from './condominium.service';
import { CreateCondominiumDto } from './dto/create-condominium.dto';
import { UpdateCondominiumDto } from './dto/update-condominium.dto';

@Controller('condominiums')
export class CondominiumController {
  constructor(private readonly service: CondominiumService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post()
  create(@Body() dto: CreateCondominiumDto) {
    return this.service.create(dto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateCondominiumDto) {
    return this.service.update(Number(id), dto);
  }
}