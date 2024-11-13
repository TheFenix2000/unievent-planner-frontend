import { styled } from '@mui/material';
import { Avatar, Box, Button } from '@mui/material';

import { theme } from '../../assets/styles/theme';

export const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  font-family: 'Inter', sans-serif;
`;

export const PanelButtonsContainer = styled(Box)`
  gap: 1rem;
  width: 100%;
`;

export const PanelButton = styled(Button)`
  display: flex;
  flex: 1 1 0%;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  color: ${theme.colors.black_100};
  border-bottom: 0.125rem solid ${theme.colors.grey_25};
  border-radius: 0;
  text-transform: none;
  font-size: 1.5rem;
`;

export const Icon = styled(Avatar)`
  background-color: ${theme.colors.grey_25};
  color: ${theme.colors.black_100};
  width: 1rem;
  height: 1rem;
  margin-right: 1.5rem;
  padding: 0.5rem;
`;
