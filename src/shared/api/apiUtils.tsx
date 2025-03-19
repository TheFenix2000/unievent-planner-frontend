import { callApi } from '../../utils/callApi';
import DtoMapping from '../../utils/dtoMapping';
import { AnnouncementDto } from '../dtos/announcement.dto';

class ApiUtils {
  static announcements = {
    async find(): Promise<object[]> {
      return await callApi('/announcements', 'GET');
    },
    async get(id: string): Promise<AnnouncementDto> {
      const response = await callApi(`/announcements/${id}`, 'GET');
      return DtoMapping.mapAnnouncementData(response);
    },
    async create(data: object): Promise<AnnouncementDto> {
      const response = await callApi('/announcements', 'POST', data);
      return DtoMapping.mapAnnouncementData(response);
    },
    async delete(id: string): Promise<object> {
      return await callApi(`/announcements/${id}`, 'DELETE');
    },
  };
}

export default ApiUtils;
