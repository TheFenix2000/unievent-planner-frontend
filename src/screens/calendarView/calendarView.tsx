import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toast } from 'react-hot-toast';

import { Wrapper, AddButton, Announcements } from './calendarViewStyles';

export const CalendarView = () => {
  const handleButtonClick = async (message: string) => {
    const loadingToastId = toast.loading(`Przetwarzanie: ${message}`);
    try {
      // Placeholder logic for future branching between success and error
      // SimulateAction(); should be replaced with logic dedicated to~
      // ~adding events for the user or the group
      await simulateAction();
      toast.success(message);
    } catch (error) {
      toast.error('Nie udało się zrealizować rządania.');
    } finally {
      toast.dismiss(loadingToastId);
    }
  };

  const simulateAction = async () => {
    // Simulate an action that always fails for now
    return new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Simulated error')), 3000),
    );
  };

  return (
    <Wrapper>
      <AddButton
        variant="contained"
        onClick={() => handleButtonClick('Dodawanie prywatnego wydarzenia...')}
      >
        + Dodaj wydarzenie dla siebie
      </AddButton>
      <AddButton
        variant="contained"
        onClick={() => handleButtonClick('Dodawanie wydarzenia dla grupy...')}
      >
        + Dodaj wydarzenie dla grupy
      </AddButton>
      <Announcements>
        <FontAwesomeIcon icon={faChevronUp} /> Ogłoszenia
      </Announcements>
    </Wrapper>
  );
};

export default CalendarView;
