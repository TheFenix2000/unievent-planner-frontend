import { BaseDto } from './base.dto';

export interface AnnouncementDto extends BaseDto {
  title: string;
  description: string;
  expiresAt?: Date;
  important: boolean;
}
