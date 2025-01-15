import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Box,
  Button,
  TextField,
  FormControl,
  MenuItem,
  Select,
} from '@mui/material';
import styled from 'styled-components';

import { theme } from '../../assets/styles/theme';

export const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  box-sizing: border-box;
`;

export const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '0.6rem 1.2rem',
  border: '0.3rem solid',
  lineHeight: 1.5,
  backgroundColor: theme.colors.red_100,
  borderColor: theme.colors.red_100,
  borderRadius: 8,
  color: theme.colors.white_100,
  margin: 20,
  fontFamily: ['Inter', 'sans-serif'].join(','),
});

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
      borderColor: theme.colors.grey_50,
      boxShadow: 'none',
      borderWidth: '0.2rem',
      borderBottomLeftRadius: '0.4rem',
    },
  },
  '& .MuiInputLabel-root': {
    color: theme.colors.grey_50,
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: theme.colors.grey_50,
  },
});

export const CustomFormControl = styled(FormControl)({
  '& .MuiInputLabel-root': {
    color: theme.colors.grey_50,
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: theme.colors.grey_50,
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
      borderColor: theme.colors.grey_50,
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

export const CustomSelect = styled(Select)({
  borderLeft: '0.2rem solid',
  borderRight: '0.2rem solid',
  borderColor: theme.colors.grey_50,
  borderTopLeftRadius: 0,
  borderTopRightRadius: 0,
  borderBottomLeftRadius: '0.5rem',
  borderBottomRightRadius: '0.5rem',
  '& .MuiList-root': {
    paddingBottom: 0,
    paddingTop: 0,
  },
  '& .MuiInputBase-root': {
    borderBottomLeftRafius: '0rem',
    borderBottomRightRafius: '0rem',
  },
});

export const styles = {
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
    borderLeft: '0.2rem solid',
    borderRight: '0.2rem solid',
    borderBottom: '0.2rem solid',
    borderColor: theme.colors.grey_50,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: '0.4rem',
    borderBottomRightRadius: '0.4rem',
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

const InputBox = styled(Box)`
  display: flex;
  align-items: center;
  border-radius: 0.4rem;
  width: 100%;
  height: 4rem;
  padding-left: 0.625rem;
  position: relative;
`;

const InputField = styled.textarea`
  border: none;
  outline: none;
  width: 80%;
  height: 100%;
  background: transparent;
  resize: none;
  overflow-wrap: break-word;
  word-wrap: break-word;
  margin-top: 2.5rem;
  margin-left: 1.25rem;
  font-size: 1rem;
`;

const Label = styled.label<{ active: boolean }>`
  position: absolute;
  left: 0.625rem;
  top: ${({ active }) => (active ? '-1rem' : '2rem')};
  transform: ${({ active }) => (active ? 'scale(0.75)' : 'translateY(-50%)')};
  background-color: ${theme.colors.white_100};
  transition: all 0.3s ease;
`;

export const Name = styled(InputBox)<{ $nameOn: boolean }>`
  border: solid
    ${({ $nameOn }) => ($nameOn ? theme.colors.red_100 : theme.colors.grey_50)};
`;

export const NameLabel = styled(Label)<{ $nameOn: boolean }>`
  color: ${({ $nameOn }) =>
    $nameOn ? theme.colors.red_100 : theme.colors.grey_50};
`;

export const Date = styled(InputBox)<{ $dateOn: boolean }>`
  border: solid;
  border-width: 0.2rem;
  borderbottomleftradius: 0.4rem;
  border-color: ${theme.colors.grey_50};
  ${({ $dateOn }) => ($dateOn ? theme.colors.red_100 : theme.colors.grey_50)};
`;

export const InputFieldDate = styled(InputField)``;

export const DateLabel = styled(Label)<{ $dateOn: boolean }>`
  color: ${({ $dateOn }) =>
    $dateOn ? theme.colors.red_100 : theme.colors.grey_50};
`;
