import { Groups, Person } from '@mui/icons-material';
import { IconButton, Box } from '@mui/material';

import { styles } from './HeaderStyles';

const Header = () => {
  return (
    <Box sx={styles.header}>
      <IconButton>
        <img
          src="./univent-icon.svg"
          alt="Univent Logo"
          style={styles.univentLogo}
        />
      </IconButton>
      <Box sx={styles.headerIconsRight}>
        <IconButton>
          <Groups sx={styles.icon} />
        </IconButton>
        <IconButton>
          <Person sx={styles.icon} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Header;
