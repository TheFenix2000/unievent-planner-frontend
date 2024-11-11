import { IconButton, styled, TextField, Typography, Box } from '@mui/material';

import { theme } from '../../assets/styles/theme';
import '@fontsource/inter';

export const styles = {
  univentLogo: {
    width: '5rem',
    height: '5rem',
    paddingLeft: '0.5rem',
  },

  settingsIcon: {
    width: '4rem',
    height: '4rem',
  },

  avatarIcon: {
    width: '4rem',
    height: '4rem',
    color: 'black',
  },

  settingsUserContainer: {
    display: 'flex',
  },
};

export const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 0 2rem;
  box-sizing: border-box;
  position: relative;
`;

export const NewGroupButton = styled(IconButton)`
  position: fixed;
  bottom: 1rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  background-color: ${theme.colors.red_100};
  color: ${theme.colors.white_100};
  padding: 10px 13px;
  font-size: 1.25rem;
  text-align: center;
  font-family: 'Inter', sans-serif;

  &.MuiIconButton-root {
    background-color: ${theme.colors.red_100};
  }
`;

export const Header = styled(Typography)`
  margin: 0 0 1.5rem 0;
  font-size: 2rem;
  text-align: left;
  font-family: 'Inter', sans-serif;
`;

export const SearchButton = styled(TextField)`
  display: flex;
  background-color: white;
  margin-bottom: 1rem;
  width: 100%;
  border: none;
  font-family: 'Inter', sans-serif;

  & input::placeholder {
    color: black;
    font-size: 1.25rem;
    font-family: 'Inter', sans-serif;
  }

  & .MuiInputAdornment-root {
    font-size: 1.5rem;
    font-family: 'Inter', sans-serif;
  }

  & .MuiInputBase-input {
    padding: 10px;
    font-family: 'Inter', sans-serif;
  }
`;
export const GroupCard = styled(Box)`
  display: flex;
  align-items: center;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: ${theme.colors.red_25};
  border-radius: 12px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  font-family: 'Inter', sans-serif;
  cursor: pointer;

  & img {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    margin-right: 1rem;
  }

  & .group-info {
    display: flex;
    font-family: 'Inter', sans-serif;
    flex-direction: column;
  }

  & .group-name {
    font-size: 1.25rem;
    font-family: 'Inter', sans-serif;
    font-weight: bold;
    color: ${theme.colors.black_100};
  }

  & .member-count {
    font-family: 'Inter', sans-serif;
    font-size: 0.75rem;
    color: ${theme.colors.grey_50};
  }

  & .edit-button {
    position: absolute;
    right: 0;
    top: 0;
  }
`;

export const Groups = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
