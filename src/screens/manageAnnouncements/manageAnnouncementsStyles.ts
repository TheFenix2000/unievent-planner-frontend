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
  announcements: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  announcementCard: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.red_50,
    padding: '6%',
    borderRadius: '1rem',
    marginBottom: '6%',
  },
  groupInfo: {
    display: 'flex',
    alignItems: 'center',
  },
  announcementName: {
    fontSize: '1.5rem',
    fontWeight: 500,
    fontFamily: 'Inter, sans-serif',
    textAlign: 'left',
    color: theme.colors.black_100,
    marginLeft: '3%',
    marginTop: '-4%',
    marginBottom: '-1.2%',
  },
  announcementDescription: {
    color: theme.colors.black_100,
    fontSize: '1.25rem',
    textAlign: 'left',
    fontWeight: '300',
    marginTop: '3%',
    marginLeft: '2%',
    marginBottom: '3%',
  },
  groupName: {
    color: theme.colors.black_100,
    fontSize: '0.75rem',
    textAlign: 'left',
    marginLeft: '2%',
  },
};
