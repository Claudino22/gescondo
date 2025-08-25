import { IsNumber, IsString } from 'class-validator';

export class CreateVoteDto {
  @IsNumber()
  meetingId: number;

  @IsNumber()
  userId: number;

  @IsString()
  choice: string;
}