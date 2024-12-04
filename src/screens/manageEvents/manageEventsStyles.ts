import { theme } from '../../assets/styles/theme';

export const styles = {
  container: {
    textAlign: 'center',
    padding: '0 2rem',
  },
  pageTitle: {
    display: 'flex',
    alignItems: 'center',
    margin: '0 0 1.5rem 0',
  },
  title: {
    fontSize: '2rem',
    textAlign: 'left',
  },
  events: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
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
    fontSize: '1.5rem',
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
    fontSize: '1rem',
    textAlign: 'left',
    marginLeft: '2%',
    fontWeight: '100',
  },
  eventDescription: {
    color: theme.colors.white_100,
    fontSize: '1.25rem',
    textAlign: 'left',
    fontWeight: '300',
    marginTop: '3%',
    marginLeft: '2%',
    marginBottom: '3%',
  },
  groupName: {
    color: theme.colors.white_100,
    fontSize: '0.75rem',
    textAlign: 'left',
    marginLeft: '2%',
  },
};
