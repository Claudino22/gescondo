import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateAnnouncementDto } from './dto/create-announcement.dto';

const prisma = new PrismaClient();

@Injectable()
export class AnnouncementService {
  async findAll() {
    return prisma.announcement.findMany();
  }

  async create(dto: CreateAnnouncementDto) {
    return prisma.announcement.create({ data: dto });
  }
}