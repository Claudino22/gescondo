import { IsDateString, IsString, IsOptional } from 'class-validator';

export class CreateMeetingDto {
  @IsDateString()
  date: string;

  @IsString()
  agenda: string;

  @IsString()
  quorumRule: string;

  @IsOptional()
  @IsString()
  minutesFile?: string;
}