import React from 'react';

import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconButton, Box, Typography } from '@mui/material';

import { styles } from './manageAnnouncementsStyles';
import { theme } from '../../assets/styles/theme';

export const Manageannouncements = () => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.pageTitle}>
        <Typography variant="h5" sx={styles.title}>
          Ogłoszenia dodane przez ciebie
        </Typography>
      </Box>
      <Box sx={styles.announcements}>
        <Box sx={styles.announcementCard}>
          <Box sx={styles.groupInfo}>
            <Box>
              <Typography sx={styles.announcementName}>Lorem Ipsum</Typography>
              <Typography sx={styles.announcementDescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </Typography>
              <Typography sx={styles.groupName}>
                dla InformatykaStosowana2023
              </Typography>
            </Box>
          </Box>
          <IconButton>
            <FontAwesomeIcon
              icon={faPen}
              style={{
                color: theme.colors.black_100,
                marginTop: '-400%',
                marginRight: '-100%',
              }}
            />
          </IconButton>
        </Box>
        <Box sx={styles.announcementCard}>
          <Box sx={styles.groupInfo}>
            <Box>
              <Typography sx={styles.announcementName}>Lorem Ipsum</Typography>
              <Typography sx={styles.announcementDescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </Typography>
              <Typography sx={styles.groupName}>
                dla InformatykaStosowana2023
              </Typography>
            </Box>
          </Box>
          <IconButton>
            <FontAwesomeIcon
              icon={faPen}
              style={{
                color: theme.colors.black_100,
                marginTop: '-400%',
                marginRight: '-100%',
              }}
            />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Manageannouncements;
