import { styled } from '@mui/material';
import { Box, Button, TextField, FormControl, MenuItem } from '@mui/material';

export const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 32px;
  box-sizing: border-box;
`;

export const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',

  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#F13D42',
  borderColor: '#F13D42',
  borderRadius: 8,
  color: '#FFFFFF',
  margin: 20,
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    'color: white',
  ].join(','),
  '&:hover': {
    backgroundColor: '#F13D42',
    borderColor: '#F13D42',
    boxShadow: 'none',
  },
});

export const CustomTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'black',
      borderWidth: '1px',
    },
    '&:hover fieldset': {
      borderColor: 'black',
      borderWidth: '1px',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'black',
      boxShadow: 'none',
      borderWidth: '1px',
    },
  },
  '& .MuiInputLabel-root': {
    color: 'black',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: 'black',
  },
});

export const CustomFormControl = styled(FormControl)({
  '& .MuiInputLabel-root': {
    color: 'black',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: 'black',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'black',
      borderWidth: '1px',
    },
    '&:hover fieldset': {
      borderColor: 'black',
      borderWidth: '1px',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'black',
      boxShadow: 'none',
      borderWidth: '1px',
    },
  },
});

export const CustomCalendarTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'black',
      borderWidth: '1px',
    },
    '&:hover fieldset': {
      borderColor: 'black',
      borderWidth: '1px',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'black',
      boxShadow: 'none',
      borderWidth: '1px',
    },
  },
  '& .MuiInputLabel-root': {
    color: 'black',
    borderWidth: '1px',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: 'black',
    borderWidth: '1px',
  },
});

export const CustomMenuItem = styled(MenuItem)({
  border: '1px solid black',
  borderRadius: '4px',
  margin: '4px 0',
});
