import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateMeetingDto } from './dto/create-meeting.dto';
import { UpdateMeetingDto } from './dto/update-meeting.dto';

const prisma = new PrismaClient();

@Injectable()
export class MeetingService {
  async findAll() {
    return prisma.meeting.findMany();
  }

  async create(dto: CreateMeetingDto) {
    return prisma.meeting.create({ data: dto });
  }

  async update(id: number, dto: UpdateMeetingDto) {
    return prisma.meeting.update({ where: { id }, data: dto });
  }
}