import { styled } from '@mui/material';
import {
  Box,
  Button,
  TextField,
  FormControl,
  Typography,
  Switch,
} from '@mui/material';

import { theme } from '../../assets/styles/theme';

export const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
  gap: 1rem;
`;

export const TitleBox = styled(Box)`
  margin: 0 0 1.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleContent = styled(Typography)`
  font-family: 'Inter', sans-serif;
  font-size: 2rem;
`;

export const TopBar = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InputField = styled(TextField)`
  .MuiInputLabel-root {
    &.Mui-focused {
      color: ${theme.colors.red_100};
    }
  }
  font-family: 'Inter', sans-serif;
  & .MuiOutlinedInput-root {
    color: ${theme.colors.black_100};
    border-radius: 11px;
    & fieldset {
      border-width: 1.5px;
      border-color: ${theme.colors.grey_50};
    }
    &:hover fieldset {
      border-color: ${theme.colors.grey_50};
    }
    &.Mui-focused fieldset {
      border-color: ${theme.colors.red_50};
    }
    & .MuiInputBase-input {
      font-family: 'Inter', sans-serif;
      color: ${theme.colors.black_100};
    }
    && .MuiInputLabel-root {
      font-family: 'Inter', sans-serif;
      color: ${theme.colors.black_100};
    }
    && .MuiInputLabel-outlined {
      color: ${theme.colors.black_100};
    }
  }
`;

export const GroupSelect = styled(FormControl)``;

export const BootstrapButton = styled(Button)`
  background-color: ${theme.colors.red_100};
  color: ${theme.colors.white_100};
  text-transform: none;
  font-family: 'Inter', sans-serif;
  font-size: 1.25rem;
  box-sizing: content-box;
  min-height: 60px;
  &:hover {
    background-color: ${theme.colors.red_100};
    box-shadow: none;
  }
  flex: 1 1 0%;
  border-radius: 11px;
`;

export const ImportantSwitchWrapper = styled(Box)`
  display: flex;
  align-items: center;
  flex: 0 1 0%;
  justify-content: space-between;
`;

export const ImportantSwitchLabel = styled(Box)`
  align-self: start;
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 1.5rem;
  font-family: 'Inter', sans-serif;
`;

export const CustomSwitch = styled(Switch)`
  align-self: start;
  width: 42px;
  height: 26px;
  padding: 0;
  display: flex;
  .MuiSwitch-switchBase {
    padding: 0;
    margin: 2px;
    transform: translateX(0px);
    &.Mui-checked {
      transform: translateX(16px);
      color: ${theme.colors.white_100};
      & + .MuiSwitch-track {
        background-color: ${theme.colors.red_100};
        opacity: 1;
      }
    }
  }
  .MuiSwitch-thumb {
    box-sizing: border-box;
    width: 22px;
    height: 22px;
  }
  .MuiSwitch-track {
    border-radius: 13px;
    background-color: ${theme.colors.grey_50};
    opacity: 1;
  }
`;
