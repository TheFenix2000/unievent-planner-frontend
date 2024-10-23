import { Box, Button } from '@mui/material';
import { styled } from '@mui/system';

import { theme } from '../../assets/styles/theme';

export const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${theme.colors.white_100};
`;

export const Logo = styled('img')`
  width: 18rem;
  height: 18rem;
  margin-bottom: 4rem;
`;

export const GoogleButton = styled(Button)`
  background-color: ${theme.colors.grey_75};
  color: ${theme.colors.white_100};
  font-family: 'Inter', sans-serif;
  font-size: 1.25rem;
  text-align: center;
  text-transform: none;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22rem;
  height: 4rem;
  border-radius: 0.6rem;

  &:hover {
    background-color: ${theme.colors.grey_50};
  }
  img {
    width: 2rem;
    height: 2rem;
    margin-right: 0.5rem;
  }
`;
