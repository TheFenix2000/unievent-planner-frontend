import { AnnouncementDto } from '../shared/dtos/announcement.dto';

class DtoMapping {
  static mapAnnouncementData = (data: unknown): AnnouncementDto => {
    const result = {
      id: data['id'],
      title: data['title'],
      description: data['description'],
      expiresAt: data['expiresAt'],
      important: data['important'],
      createdBy: data['createdBy'],
      updatedBy: data['updatedBy'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
    };
    return result;
  };
}

export default DtoMapping;
