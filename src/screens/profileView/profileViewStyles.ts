import { Input, inputClasses } from '@mui/base/Input';
import { styled } from '@mui/material';
import { Box, Button, IconButton, ListItem } from '@mui/material';

import { theme } from '../../assets/styles/theme';

export const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding: 32px;
  box-sizing: border-box;
  position: relative;
  font-family: 'Inter', sans-serif;
  @media (max-width: 600px) {
    padding: 16px;
  }
`;

export const EditButton = styled(IconButton)`\
    border-radius: 9999px;
    border: 2px solid ${theme.colors.grey_25};
      background-color: ${theme.colors.white_100};
  @media {
    color: ${theme.colors.black_100};
  }
`;

export const EditButtonWrapper = styled(Box)`
  display: flex;
  position: absolute;
  right: 2rem;
  top: 6rem;
  margin-right: auto;
  justify-content: flex-start;
`;

export const AvatarWrapper = styled(Box)`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0.5rem;
  font-size: 24px;
`;

export const ChangePasswordButton = styled(Button)`
  background-color: ${theme.colors.red_100};
  color: ${theme.colors.white_100};
  &:hover {
    background-color: ${theme.colors.red_100};
  }
  margin: 10px 0 15px;
  padding: 16px 0;
  font-size: 18px;
  border-radius: 8px;
  width: 90%;
  @media (max-width: 600px) {
    margin: 5px 0 10px;
    padding: 12px 0;
    font-size: 16px;
  }
`;

export const Item = styled(ListItem)`
  position absolute;
  background-color: ${theme.colors.red_25};
  border-radius: 12px;
  margin-bottom: 8px;
`;

export const StyledInput = styled(Input)(`
  display: inline-block;

  .${inputClasses.input} {
    width: 18.5rem;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 8px;
    color: ${theme.colors.grey_75};
    background: ${theme.colors.white_100};
    border: 1px solid ${theme.colors.grey_25};
    box-shadow: 0px 2px 2px ${theme.colors.grey_10};

    &:hover {
      border-color: ${theme.colors.red_25};
    }

    &:focus {
      outline: 0;
      border-color: ${theme.colors.red_50};
    }
  }

`);

export const ChangePasswordForm = styled(Box)`
  display: flex;
  width: 90%;
  align-items: center;
  flex-direction: column;
  margin-right: auto;
  padding: 1rem;
  border-style: solid;
  border-color: ${theme.colors.black_100};
  border-radius: 1rem;
`;

export const SaveChangesButton = styled(Button)`
  background-color: ${theme.colors.red_100};
  color: ${theme.colors.white_100};
  &:hover {
    background-color: ${theme.colors.red_100};
  }
  align-self: flex-end;
  margin: 10px 0 15px;
  padding: 16px 0;
  font-size: 18px;
  border-radius: 2rem;
  width: 40%;
  height: 17%;
  @media (max-width: 600px) {
    margin: 0.5rem 0 -0.7rem;
    padding: 12px 0;
    font-size: 12px;
  }
`;
