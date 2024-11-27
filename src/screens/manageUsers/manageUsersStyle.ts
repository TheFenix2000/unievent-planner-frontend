import { styled } from '@mui/material';
import { ListItem, IconButton, Box } from '@mui/material';

import { theme } from '../../assets/styles/theme';

export const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
  margin: auto;
  @media (max-width: 600px) {
    padding: 16px;
  }
`;
export const Content = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 95%;
  padding: 16px;
`;

export const BackButton = styled(IconButton)`
  position: absolute;
  border-radius: 9999px;
  border: 2px solid ${theme.colors.grey_25};
  @media {
    color: ${theme.colors.black_100};
  }
`;
export const RemoveButton = styled(IconButton)`
  position: relative;
`;

export const Item = styled(ListItem)`
  position absolute;
  background-color: ${theme.colors.red_25};
  border-radius: 12px;
`;

export const BackButtonWrapper = styled(Box)`
  display: flex;
  justify-content: flex-start;
`;
