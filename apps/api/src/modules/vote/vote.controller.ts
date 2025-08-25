import { Controller, Post, Body } from '@nestjs/common';
import { VoteService } from './vote.service';
import { CreateVoteDto } from './dto/create-vote.dto';

@Controller('votes')
export class VoteController {
  constructor(private readonly service: VoteService) {}

  @Post()
  create(@Body() dto: CreateVoteDto) {
    return this.service.create(dto);
  }
}