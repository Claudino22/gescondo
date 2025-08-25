import { Controller, Get, Post, Body, Param, Patch, Query } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';

@Controller('invoices')
export class InvoiceController {
  constructor(private readonly service: InvoiceService) {}

  @Get()
  findAll(@Query('status') status?: string, @Query('due_gte') dueGte?: string, @Query('due_lte') dueLte?: string) {
    return this.service.findAll({ status, dueGte, dueLte });
  }

  @Post()
  create(@Body() dto: CreateInvoiceDto) {
    return this.service.create(dto);
  }

  @Patch(':id/pay')
  pay(@Param('id') id: string) {
    return this.service.pay(Number(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateInvoiceDto) {
    return this.service.update(Number(id), dto);
  }
}