import * as React from 'react';

import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';
import Typography from '@mui/material/Typography';

import {
  Wrapper,
  EventItem,
  TimeSlot,
  CalendarContainer,
  Announcements,
  DayNavigation,
  DayLabel,
} from './weekCalendarStyles';

interface Event {
  id: number;
  title: string;
  startTime: string;
  endTime: string;
  color: string;
  description?: string;
  sender?: string;
}

const events: Event[] = [
  {
    id: 1,
    title: 'Podstawy programowania',
    startTime: '08:00',
    endTime: '09:00',
    color: 'blue',
    sender: 'Starosta jankowalski',
  },
];

const getWeekRange = (date: Date) => {
  const start = new Date(date);
  start.setDate(start.getDate() - start.getDay() + 1);
  const end = new Date(start);
  end.setDate(end.getDate() + 6);
  return `${start.getDate()}.${start.getMonth() + 1} - ${end.getDate()}.${end.getMonth() + 1}`;
};

const getCurrentDay = (date: Date) => {
  const days = ['Pon.', 'Wt.', 'Śro.', 'Czw.', 'Pt.', 'Sob.', 'Ndz.'];
  return days[date.getDay() - 1];
};

const getDayOfMonth = (date: Date) => {
  return date.getDate();
};

const WeekCalendar: React.FC = () => {
  const [currentDate, setCurrentDate] = React.useState(new Date('2025-02-03'));
  const [currentDay, setCurrentDay] = React.useState(
    getCurrentDay(currentDate),
  );
  const startHour = 8;
  const endHour = 23;

  const handlePrevWeek = () => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setDate(newDate.getDate() - 7);
      setCurrentDay(getCurrentDay(newDate));
      return newDate;
    });
  };

  const handleNextWeek = () => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setDate(newDate.getDate() + 7);
      setCurrentDay(getCurrentDay(newDate));
      return newDate;
    });
  };

  return (
    <Wrapper>
      <Box display="flex" alignItems="center" justifyContent="center" gap={2}>
        <IconButton onClick={handlePrevWeek}>
          <ArrowBackIos />
        </IconButton>
        <Typography
          sx={{ textAlign: 'center', fontSize: '1.5rem', fontWeight: 600 }}
        >
          {getWeekRange(currentDate)}
        </Typography>
        <IconButton onClick={handleNextWeek}>
          <ArrowForwardIos />
        </IconButton>
      </Box>
      <DayNavigation>
        <DayLabel>{currentDay}</DayLabel>
        <Typography variant="h6">{getDayOfMonth(currentDate)}</Typography>
      </DayNavigation>
      <CalendarContainer>
        {Array.from({ length: endHour - startHour }, (_, i) => (
          <TimeSlot key={i}>
            <span>{startHour + i}:00</span>
          </TimeSlot>
        ))}
        {events.map((event) => (
          <EventItem
            key={event.id}
            color={event.color}
            startTime={event.startTime}
            endTime={event.endTime}
          >
            <Typography fontWeight={600}>{event.title}</Typography>
            <Typography variant="body2">
              {event.startTime} - {event.endTime}
            </Typography>
            {event.description && (
              <Typography variant="body2">{event.description}</Typography>
            )}
            {event.sender && (
              <Typography variant="caption">Od: {event.sender}</Typography>
            )}
          </EventItem>
        ))}
      </CalendarContainer>
      <Announcements>
        <FontAwesomeIcon icon={faChevronUp} /> Ogłoszenia
      </Announcements>
    </Wrapper>
  );
};

export default WeekCalendar;
