import { theme } from '../../assets/styles/theme';

export const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem 2rem',
    borderBottom: `2px solid ${theme.colors.black_100}`,
    width: '100vw',
    marginLeft: 'calc(-50vw + 50%)',
    boxSizing: 'border-box',
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
    gap: '1rem',
  },
};
