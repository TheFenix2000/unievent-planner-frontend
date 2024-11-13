import { styled } from '@mui/material';
import { IconButton, Box } from '@mui/material';

import { theme } from '../../assets/styles/theme';

export const styles = {
  container: {
    textAlign: 'center',
    padding: '2rem',
  },
  pageTitle: {
    display: 'flex',
    alignItems: 'center',
    gap: '2%',
    margin: '3%',
    marginBottom: '8%',
  },
  title: {
    fontSize: '1.75rem',
    textAlign: 'left',
  },
  eventCard: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.red_100,
    padding: '6%',
    borderRadius: '1rem',
    marginBottom: '6%',
  },
  groupInfo: {
    display: 'flex',
    alignItems: 'center',
  },
  eventName: {
    fontSize: '1.35rem',
    fontWeight: 500,
    fontFamily: 'Inter, sans-serif',
    textAlign: 'left',
    color: theme.colors.white_100,
    marginLeft: '3%',
    marginTop: '-4%',
    marginBottom: '-1.2%',
  },
  eventDateTime: {
    color: theme.colors.white_100,
    fontSize: '0.8rem',
    textAlign: 'left',
    marginLeft: '2%',
    fontWeight: 300,
  },
  eventDescription: {
    color: theme.colors.white_100,
    fontSize: '0.9rem',
    textAlign: 'left',
    fontWeight: 300,
    marginTop: '3%',
    marginLeft: '2%',
    marginBottom: '3%',
  },
  groupName: {
    color: theme.colors.white_100,
    fontSize: '0.6rem',
    textAlign: 'left',
    marginLeft: '2%',
  },
  manageButtons: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    margin: '2rem 0',
  },
  manageButton: {
    padding: '1rem',
    borderRadius: '1rem',
    fontSize: '1.2rem',
    backgroundColor: theme.colors.red_100,
    fontWeight: 'bold',
    textTransform: 'none',
  },
  buttonColor: {
    backgroundColor: theme.colors.red_100,
  },
};

export const BackButton = styled(IconButton)({
  borderRadius: '50%',
  border: `0.2rem solid ${theme.colors.grey_25}`,
  padding: '0.6rem',
  backgroundColor: theme.colors.white_100,
  width: '2.5rem',
  height: '2.5rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: theme.colors.black_100,
});

export const BackButtonWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  margin: '1rem',
});
