import { styled } from '@mui/material';
import { Box, Button, TextField, FormControl, MenuItem } from '@mui/material';

import { theme } from '../../assets/styles/theme';

export const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 4vh;
  box-sizing: border-box;
`;

export const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',

  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: theme.colors.red_100,
  borderColor: theme.colors.red_100,
  borderRadius: 8,
  color: theme.colors.white_100,
  margin: 20,
  fontFamily: ['Inter'].join(','),
  '&:hover': {
    backgroundColor: theme.colors.red_100,
    borderColor: theme.colors.red_100,
    boxShadow: 'none',
  },
});

export const CustomTextField = styled(TextField)({
  margin: '0px',
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: theme.colors.black_100,
      borderWidth: '1px',
    },
    '&:hover fieldset': {
      borderColor: theme.colors.black_100,
      borderWidth: '1px',
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.colors.black_100,
      boxShadow: 'none',
      borderWidth: '1px',
    },
  },
  '& .MuiInputLabel-root': {
    color: theme.colors.black_100,
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: theme.colors.black_100,
  },
});

export const CustomFormControl = styled(FormControl)({
  '& .MuiInputLabel-root': {
    color: theme.colors.black_100,
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: theme.colors.black_100,
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: theme.colors.black_100,
      borderWidth: '1px',
    },
    '&:hover fieldset': {
      borderColor: theme.colors.black_100,
      borderWidth: '1px',
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.colors.black_100,
      boxShadow: 'none',
      borderWidth: '1px',
    },
  },
});

export const CustomCalendarTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: theme.colors.black_100,
      borderWidth: '1px',
    },
    '&:hover fieldset': {
      borderColor: theme.colors.black_100,
      borderWidth: '1px',
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.colors.black_100,
      boxShadow: 'none',
      borderWidth: '1px',
    },
  },
  '& .MuiInputLabel-root': {
    color: theme.colors.black_100,
    borderWidth: '1px',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: theme.colors.black_100,
    borderWidth: '1px',
  },
});

export const CustomMenuItem = styled(MenuItem)({
  borderTop: '1px solid',
  borderBottom: '1px solid',
  borderColor: theme.colors.black_100,
  borderRadius: '0px',
  margin: '0px 0',
});

export const CustomMenuItemTop = styled(MenuItem)({
  borderTop: '1px solid',
  borderColor: theme.colors.black_100,
  borderRadius: '0px',
  margin: '0px 0',
});

export const CustomMenuItemBottom = styled(MenuItem)({
  borderBottom: '1px solid',
  borderColor: theme.colors.black_100,
  borderRadius: '0px',
  margin: '0px 0',
});
