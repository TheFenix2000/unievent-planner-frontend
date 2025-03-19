import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, TextField, FormControl, MenuItem } from '@mui/material';
import styled from 'styled-components';

import { theme } from '../../assets/styles/theme';

export const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  box-sizing: border-box;
`;

export const CustomTextField = styled(TextField)({
  margin: '0rem',
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: theme.colors.grey_50,
      borderWidth: '0.2rem',
      borderBottomLeftRadius: '0.4rem',
    },
    '&:hover fieldset': {
      borderColor: theme.colors.grey_50,
      borderWidth: '0.2rem',
      borderBottomLeftRadius: '0.4rem',
    },
    '&.Mui-focused fieldset': {
      color: theme.colors.red_50,
      borderColor: theme.colors.red_50,
      boxShadow: 'none',
      borderWidth: '0.2rem',
      borderBottomLeftRadius: '0.4rem',
    },
  },
  '& .MuiInputLabel-root': {
    color: theme.colors.grey_50,
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: theme.colors.red_50,
  },
});

export const CustomFormControl = styled(FormControl)({
  '& .MuiInputLabel-root': {
    color: theme.colors.grey_50,
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: theme.colors.red_50,
    borderColor: theme.colors.red_50,
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: theme.colors.grey_50,
      borderWidth: '0.2rem',
    },
    '&:hover fieldset': {
      borderColor: theme.colors.grey_50,
      borderWidth: '0.2rem',
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.colors.red_50,
      boxShadow: 'none',
      borderWidth: '0.2rem',
    },
  },
});

export const CustomMenuItem = styled(MenuItem)({
  borderTop: '0.2rem solid',
  borderBottom: '0.2rem solid',
  borderColor: theme.colors.grey_50,
  borderRadius: '0rem',
  margin: '0rem 0',
});

export const CustomMenuItemTop = styled(MenuItem)({
  borderColor: theme.colors.grey_50,
  borderRadius: '0rem',
  margin: '0rem 0',
});

export const CustomMenuItemBottom = styled(MenuItem)({
  borderColor: theme.colors.grey_50,
  borderBottom: '0.2rem solid',
  borderRadius: '0rem',
  margin: '0rem 0',
});

export const styles = {
  button: {
    backgroundColor: theme.colors.red_100,
    borderColor: theme.colors.red_100,
    borderRadius: 8,
    color: theme.colors.white_100,
  },
  groupAvatar: {
    width: '1.5rem',
    height: '1.5rem',
    backgroundColor: theme.colors.red_25,
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    '& > :not(style)': {
      marginTop: '2rem',
      width: '100%',
    },
  },
  customList: {
    borderBottom: '0.2rem solid',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: '0.4rem',
    borderBottomRightRadius: '0.4rem',
    borderLeft: '0.2rem solid',
    borderRight: '0.2rem solid',
    boxSizing: 'border-box',
    borderColor: theme.colors.grey_50,
    '& .MuiList-root': {
      paddingBottom: '5px',
      paddingTop: 0,
    },
    '& .MuiInputBase-root': {
      borderBottomLeftRadius: '0rem',
      borderBottomRightRadius: '0rem',
    },
  },
};

export const CalendarIcon = styled(FontAwesomeIcon)`
  color: ${theme.colors.grey_25};
  font-size: 2.5rem;
  margin-right: 0.625rem;
  float: right;
`;
