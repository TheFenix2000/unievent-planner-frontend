import { Box, Button } from '@mui/material';
import styled from 'styled-components';

import { theme } from '../../assets/styles/theme';

export const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  box-sizing: border-box;
  background-color: ${theme.colors.grey_25};
  fullheight;
  border: 0px solid;
  border-top-left-radius: 3rem;
  border-top-right-radius: 3rem;
  align-items: center;
`;

export const styles = {
  groupAvatar: {
    width: '1.5rem',
    height: '1.5rem',
    backgroundColor: theme.colors.red_25,
  },
  RedContainer: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'column',
    border: '0.2rem solid',
    color: theme.colors.dark_red_50,
    backgroundColor: theme.colors.red_25,
    borderRadius: '1rem',
    marginBottom: '2rem',
    padding: '1rem',
    '& > :not(style)': {
      width: '100%',
    },
  },
  WhiteContainer: {
    display: 'flex',
    marginBottom: '2rem',
    position: 'relative',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'column',
    border: '0.2rem solid',
    borderColor: theme.colors.grey_50,
    backgroundColor: theme.colors.white_100,
    borderRadius: '1rem',
    padding: '1rem',
    '& > :not(style)': {
      width: '100%',
    },
  },
  RedContainerModule: {
    outline: 'none',
    top: '50%',
    left: '50%',
    display: 'flex',
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    alignItems: 'center',
    flexDirection: 'column',
    border: '0.2rem solid',
    color: theme.colors.dark_red_50,
    backgroundColor: theme.colors.red_25,
    borderRadius: '1rem',
    marginTop: '2rem',
    marginBottom: '2rem',
    padding: '1rem',
    '& > :not(style)': {
      width: '100%',
    },
  },
  WhiteContainerModule: {
    outline: 'none',
    top: '50%',
    left: '50%',
    display: 'flex',
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    marginBottom: '2rem',
    alignItems: 'center',
    flexDirection: 'column',
    border: '0.2rem solid',
    borderColor: theme.colors.grey_50,
    backgroundColor: theme.colors.white_100,
    borderRadius: '1rem',
    marginTop: '2rem',
    padding: '1rem',
    '& > :not(style)': {
      width: '100%',
    },
  },
  title: {
    fontSize: '1.5rem',
    marginTop: '2rem',
  },
  arrow: {
    width: '2rem',
    height: '2rem',
    align: 'center',
  },
  descriptionWhite: {
    fontSize: '1rem',
    marginTop: '1rem',
    height: 'calc(4 * 1.5rem)',
    maxHeight: 'calc(4 * 1.5rem)',
    overflow: 'auto',
  },
  descriptionModuleWhite: {
    fontSize: '1rem',
    marginTop: '1rem',
    height: 'calc(10 * 1.5rem)',
    maxHeight: 'calc(10 * 1.5rem)',
    overflow: 'auto',
  },
  topicWhite: {
    display: 'flex',
    fontSize: '2rem',
    marginTop: '1rem',
    lineHeight: '2.25rem',
  },
  groupWhite: {
    display: 'flex',
    fontSize: '0.7rem',
  },
  creatorWhite: {
    display: 'flex',
    fontSize: '0.7rem',
    marginTop: '1rem',
  },
  creatorWhiteModal: {
    display: 'flex',
    fontSize: '0.7rem',
    marginTop: '1rem',
    color: theme.colors.grey_50,
  },
  dateWhite: {
    display: 'flex',
    fontSize: '0.7rem',
    marginTop: '0.2rem',
    color: theme.colors.grey_50,
  },
  descriptionRed: {
    fontSize: '1rem',
    marginTop: '1rem',
    color: theme.colors.dark_red_50,
    height: 'calc(4 * 1.5rem)',
    maxHeight: 'calc(4 * 1.5rem)',
    overflow: 'auto',
  },
  descriptionModuleRed: {
    fontSize: '1rem',
    marginTop: '1rem',
    color: theme.colors.dark_red_50,
    height: 'calc(10 * 1.5rem)',
    maxHeight: 'calc(10 * 1.5rem)',
    overflow: 'auto',
  },
  topicRed: {
    display: 'flex',
    fontSize: '2rem',
    marginTop: '1rem',
    color: theme.colors.dark_red_50,
  },
  groupRed: {
    display: 'flex',
    fontSize: '0.7rem',
    color: theme.colors.dark_red_50,
  },
  creatorRed: {
    display: 'flex',
    fontSize: '0.7rem',
    marginTop: '1rem',
    color: theme.colors.dark_red_50,
  },
  creatorRedModal: {
    display: 'flex',
    fontSize: '0.7rem',
    marginTop: '1rem',
    color: theme.colors.red_100,
  },
  dateRed: {
    display: 'flex',
    fontSize: '0.7rem',
    marginTop: '0.2rem',
    color: theme.colors.red_100,
  },
  button: {
    backgroundColor: theme.colors.red_100,
    borderColor: theme.colors.red_100,
    borderRadius: 8,
    color: theme.colors.white_100,
  },
};

export const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  borderRadius: '0.71rem !important',
  width: '100%',
  textTransform: 'none',
  fontSize: 16,
  padding: '0.6rem 1.2rem',
  border: '0.3rem solid',
  lineHeight: 1.5,
  height: '4rem',
  backgroundColor: theme.colors.red_100,
  borderColor: theme.colors.red_100,
  color: theme.colors.white_100,
  marginTop: '2rem',
  fontFamily: ['Inter', 'sans-serif'].join(','),
  position: 'relative',
});
