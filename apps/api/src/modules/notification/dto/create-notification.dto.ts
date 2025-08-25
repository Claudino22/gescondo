import { IsNumber, IsString } from 'class-validator';

export class CreateNotificationDto {
  @IsNumber()
  userId: number;

  @IsString()
  type: string;

  @IsString()
  channel: string;

  @IsString()
  payload: string;

  @IsString()
  status: string;
}