import { theme } from '../../assets/styles/theme';

export const styles = {
  container: {
    textAlign: 'center',
    padding: '0 2rem',
  },
  manageGroups: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    margin: '1rem',
  },
  title: {
    fontSize: '2rem',
    margin: '0 0 1.5rem 0',
  },
  groupCard: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.red_25,
    padding: '1rem',
    borderRadius: '1rem',
  },
  groupInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  groupAvatar: {
    width: '4rem',
    height: '4rem',
    backgroundColor: theme.colors.red_25,
  },
  groupName: {
    fontSize: '1.25rem',
    textAlign: 'left',
  },
  groupMembers: {
    color: theme.colors.grey_50,
    fontSize: '0.75rem',
    textAlign: 'left',
  },
  manageButtons: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    margin: '2rem 0',
  },
  manageButton: {
    padding: '1rem',
    borderRadius: '1rem',
    fontSize: '1.25rem',
    backgroundColor: `${theme.colors.red_100} !important`,
    fontWeight: 'bold',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: `${theme.colors.red_75} !important`,
    },
  },
  buttonColor: {
    backgroundColor: theme.colors.red_100,
  },
};
