import { IsDateString, IsString, IsOptional } from 'class-validator';

export class UpdateMeetingDto {
  @IsOptional()
  @IsDateString()
  date?: string;

  @IsOptional()
  @IsString()
  agenda?: string;

  @IsOptional()
  @IsString()
  quorumRule?: string;

  @IsOptional()
  @IsString()
  minutesFile?: string;
}