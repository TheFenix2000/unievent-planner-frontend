import { IconButton, Box } from '@mui/material';
import styled from 'styled-components';

import { theme } from '../assets/styles/theme';

export const BackButton = styled(IconButton)({
  borderRadius: '50%',
  border: `0.2rem solid ${theme.colors.grey_25}`,
  padding: '0.6rem',
  backgroundColor: theme.colors.white_100,
  width: '2.5rem',
  height: '2.5rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: theme.colors.black_100,
});

export const BackButtonWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  margin: '1rem',
});
