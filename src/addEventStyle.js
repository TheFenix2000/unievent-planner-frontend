import { styled } from '@mui/material';
import { IconButton, Box, Button, TextField, FormControl, MenuItem} from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';

export const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 32px;
  box-sizing: border-box;
  @media (max-width: 600px) {
    padding: "auto";
  }
`;

export const BackButton = styled(IconButton)`
    position: absolute;
    border-radius: 9999px;
    border: 2px solid #bbbbbb;
  @media {
    color: black;
  }
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
    'color: white'
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
    },
    '&:hover fieldset': {
      borderColor: 'black',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'black',
      boxShadow: 'none',
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
    },
    '&:hover fieldset': {
      borderColor: 'black',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'black',
      boxShadow: 'none',
    },
  },
});

export const CustomDemoContainer = styled(DemoContainer)({
  '& .MuiInputLabel-root': {
    color: 'black',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: 'black',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'black',
    },
    '&:hover fieldset': {
      borderColor: 'black',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'black',
      boxShadow: 'none',
    },
  },
});

export const CustomMenuItem = styled(MenuItem)({
      padding: '10px',
      border: '2px solid black', // Black border
      color: 'black',            // Black text
      backgroundColor: 'white',  // Optional: white background
      textAlign: 'center',       // Center text
      cursor: 'pointer',         // Pointer cursor on hover
      transition: 'background-color 0.3s', // Transition effect
});