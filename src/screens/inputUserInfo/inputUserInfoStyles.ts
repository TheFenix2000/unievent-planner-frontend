import { AccountCircleOutlined } from '@mui/icons-material';
import { styled } from '@mui/material';
import { Box, Button, TextField, FormControl } from '@mui/material';

import { theme } from '../../assets/styles/theme';

document.body.style.height = '100vh';

export const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
  gap: 1rem;
  height: 100vh;
`;
export const AvatarIcon = styled(AccountCircleOutlined)`
  width: 136px;
  height: 136px;
  margin: 0 auto;
  color: ${theme.colors.black_100};
  cursor: pointer;
`;

export const InputField = styled(TextField)`
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
      border-color: ${theme.colors.red_100};
    }

    & .MuiInputBase-input {
      font-family: 'Inter', sans-serif;
      color: ${theme.colors.black_100};
    }
  }

  && .MuiInputLabel-root {
    font-family: 'Inter', sans-serif;
    color: ${theme.colors.black_100};
  }

  && .MuiInputLabel-outlined {
    color: ${theme.colors.black_100};
  }

  &&&& .MuiInputLabel-outlined.Mui-focused {
    color: ${theme.colors.red_100};
  }
`;

export const GroupSelect = styled(FormControl)``;

export const BootstrapButton = styled(Button)`
  background-color: ${theme.colors.red_100};
  color: ${theme.colors.white_100};
  text-transform: none;
  position: absolute;
  bottom: 41px;
  left: 50%;
  left: 24px;
  right: 24px;
  font-family: 'Inter', sans-serif;
  font-size: 1.25rem;
  box-sizing: content-box;
  min-height: 60px;
  &:hover {
    background-color: ${theme.colors.red_100};
    box-shadow: none;
  }
  flex: 0 1 auto;
  border-radius: 11px;
`;

export const ModalBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 11px;
  width: 375px;
  background-color: ${theme.colors.white_100};
  outline: none;
  overflow: auto;
  border: 1px solid ${theme.colors.black_100};
  box-shadow: 24px;
  padding: 2rem 2rem;
`;

export const ImageContainer = styled('div')`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-content: center;
  gap: 1rem;
`;

export const ImageContainerHeader = styled('p')`
  font-family: 'Inter', sans-serif;
  font-size: 1.5rem;
  padding 0;
  margin-top: 0;
  text-align: center;
  color: ${theme.colors.black_100};
`;

export const SelectableImage = styled('img')<{ selected: boolean }>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  border: ${({ selected }) =>
    selected ? `2px solid ${theme.colors.red_100}` : '2px solid transparent'};
`;

export const SelectedImage = styled('img')`
  width: 136px;
  height: 136px;
  border-radius: 50%;
  cursor: pointer;
`;
export const SelectedImageContainer = styled('div')`
  display: flex;
  justify-content: center;
`;
