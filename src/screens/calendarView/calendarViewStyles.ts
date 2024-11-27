// calendarViewStyles.ts
import { styled } from '@mui/material';
import { Box, Button } from '@mui/material';

import { theme } from '../../assets/styles/theme';

export const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
  padding: 0 2rem;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  font-family: 'Inter', sans-serif;
  gap: 1rem;
`;

export const Announcements = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: 100%;
  padding: 16px;
  margin-bottom: 15px;
  border-radius: 1.5em;
  position: absolute;
  bottom: -93%;
  background-color: ${theme.colors.grey_10};
  font-size: 32px;

  @media (max-width: 600px) {
    padding: 1.37rem;
  }
`;

export const AddButton = styled(Button)`
  background-color: ${theme.colors.red_100};
  color: ${theme.colors.white_100};
  &:hover {
    background-color: ${theme.colors.red_100};
  }
  font-size: 1.25rem;
  border-radius: 8px;
  width: 100%;
`;
