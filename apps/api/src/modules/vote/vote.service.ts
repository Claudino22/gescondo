import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateVoteDto } from './dto/create-vote.dto';

const prisma = new PrismaClient();

@Injectable()
export class VoteService {
  async create(dto: CreateVoteDto) {
    // Regras de unicidade por unidade podem ser implementadas aqui
    return prisma.vote.create({ data: dto });
  }
}