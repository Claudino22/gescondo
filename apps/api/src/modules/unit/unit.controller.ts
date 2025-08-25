import { Controller, Get, Post, Body, Param, Patch, Query } from '@nestjs/common';
import { UnitService } from './unit.service';
import { CreateUnitDto } from './dto/create-unit.dto';
import { UpdateUnitDto } from './dto/update-unit.dto';

@Controller('units')
export class UnitController {
  constructor(private readonly service: UnitService) {}

  @Get()
  findAll(@Query('condominiumId') condominiumId?: string) {
    return this.service.findAll(condominiumId ? Number(condominiumId) : undefined);
  }

  @Post()
  create(@Body() dto: CreateUnitDto) {
    return this.service.create(dto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateUnitDto) {
    return this.service.update(Number(id), dto);
  }
}