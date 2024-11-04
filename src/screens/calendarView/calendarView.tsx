import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Wrapper, AddButton, Announcements } from './calendarViewStyles';

export const CalendarView = () => {
  return (
    <Wrapper>
      <AddButton variant="contained">+ Dodaj wydarzenie dla siebie</AddButton>
      <AddButton variant="contained">+ Dodaj wydarzenie dla grupy</AddButton>
      <Announcements>
        <FontAwesomeIcon icon={faChevronUp} /> Ogłoszenia
      </Announcements>
    </Wrapper>
  );
};
