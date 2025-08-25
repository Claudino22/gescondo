import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';

const prisma = new PrismaClient();

@Injectable()
export class UserService {
  async findAll() {
    return prisma.user.findMany();
  }

  async create(dto: CreateUserDto) {
    return prisma.user.create({ data: dto });
  }
}