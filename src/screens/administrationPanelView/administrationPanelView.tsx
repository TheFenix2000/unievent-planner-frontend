import {
  faUsers,
  faUserPen,
  faCalendarPlus,
  faCommentMedical,
  faCalendar,
  faComment,
  faKey,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Wrapper,
  PanelButton,
  PanelButtonsContainer,
  Icon,
} from './administrationPanelViewStyles';

const buttons = [
  { icon: faUsers, text: 'Zarządzaj grupami' },
  { icon: faUserPen, text: 'Zarządzaj użytkownikami' },
  { icon: faCalendarPlus, text: 'Dodaj wydarzenie' },
  { icon: faCommentMedical, text: 'Dodaj ogłoszenie' },
  { icon: faCalendar, text: 'Zarządzaj wydarzdeniami' },
  { icon: faComment, text: 'Zarządzaj ogłoszeniami' },
  { icon: faKey, text: 'Zarządzaj kodami dostępu' },
];

export const AdministrationPanelView = () => {
  return (
    <Wrapper>
      <PanelButtonsContainer>
        {buttons.map((button, index) => (
          <PanelButton key={index}>
            <Icon variant="rounded">
              <FontAwesomeIcon icon={button.icon} />
            </Icon>
            {button.text}
          </PanelButton>
        ))}
      </PanelButtonsContainer>
    </Wrapper>
  );
};

export default AdministrationPanelView;
