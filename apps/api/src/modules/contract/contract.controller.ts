import { Controller, Get, Post, Body } from '@nestjs/common';
import { ContractService } from './contract.service';
import { CreateContractDto } from './dto/create-contract.dto';

@Controller('contracts')
export class ContractController {
  constructor(private readonly service: ContractService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post()
  create(@Body() dto: CreateContractDto) {
    return this.service.create(dto);
  }
}