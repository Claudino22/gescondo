import { Controller, Get, Post, Body, Param, Patch, Query } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';

@Controller('reservations')
export class ReservationController {
  constructor(private readonly service: ReservationService) {}

  @Get('calendar')
  getCalendar(@Query('area') area?: string, @Query('date') date?: string) {
    return this.service.getCalendar(area, date);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post()
  create(@Body() dto: CreateReservationDto) {
    return this.service.create(dto);
  }

  @Patch(':id/approve')
  approve(@Param('id') id: string) {
    return this.service.approve(Number(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateReservationDto) {
    return this.service.update(Number(id), dto);
  }
}