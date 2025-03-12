import { styled } from '@mui/material';
import { Box, Typography } from '@mui/material';

import { theme } from '../../assets/styles/theme';

export const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
  margin: auto;
  background-color: #f8f9fa;
  font-family: 'Inter, sans-serif';
`;

export const CalendarContainer = styled(Box)`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-grow: 1;
  padding: 10px;
  background: white;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  max-height: calc(100vh - 220px);
`;

export const TimeSlot = styled(Box)`
  position: relative;
  padding: 8px 0;
  font-size: 14px;
  border-bottom: 1px solid #ddd;
`;

export const EventItem = styled(Box)<{
  color: string;
  startTime: string;
  endTime: string;
}>`
  position: absolute;
  left: 13%;
  width: 80%;
  background-color: ${(props) => props.color};
  color: white;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  font-size: 14px;
`;

export const Announcements = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  padding: 16px;
  margin-bottom: 15px;
  border-radius: 1.5em;
  bottom: -93%;
  background-color: ${theme.colors.grey_10};
  font-size: 32px;
  left: 0px;

  @media (max-width: 600px) {
    padding: 1.37rem;
  }
`;

export const DayNavigation = styled(Box)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const DayLabel = styled(Typography)`
  font-size: 1.2rem;
  font-weight: 500;
`;
