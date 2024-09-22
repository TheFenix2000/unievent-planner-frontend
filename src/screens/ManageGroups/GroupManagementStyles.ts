import { styled } from '@mui/material';
import { IconButton, Box } from '@mui/material';

export const styles = {
  container: {
    textAlign: 'center',
    padding: '2rem',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem 2rem',
    borderBottom: '2px solid black',
  },
  icon: {
    fontSize: '3rem',
  },
  univentLogo: {
    width: '3rem',
    height: '3rem',
  },
  headerIconsRight: {
    display: 'flex',
    gap: '1.5rem',
  },
  manageGroups: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
    margin: '1rem',
  },
  title: {
    fontSize: '2 rem',
  },
  groupCard: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffcccc',
    padding: '1rem',
    borderRadius: '1rem',
  },
  groupInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  groupAvatar: {
    width: '6rem',
    height: '6rem',
    backgroundColor: '#ffcccc',
  },
  groupName: {
    fontSize: '1rem',
  },
  groupMembers: {
    color: '#777',
    fontSize: '0.8rem',
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
    backgroundColor: '#f13d42',
    fontWeight: 'bold',
    textTransform: 'none',
  },
  buttonColor: {
    backgroundColor: '#f13d42',
  },
};

export const BackButton = styled(IconButton)({
  borderRadius: '50%',
  border: '0.2rem solid #bbbbbb',
  padding: '0.6rem',
  backgroundColor: '#ffffff',
  width: '2.5rem',
  height: '2.5rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#000000',
});

export const BackButtonWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  margin: '1rem',
});
