import React from 'react';

import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconButton, Box, Typography } from '@mui/material';

import { styles } from './manageEventsStyles';
import { theme } from '../../assets/styles/theme';

export const ManageEvents = () => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.pageTitle}>
        <Typography variant="h5" sx={styles.title}>
          Wydarzenia dodane przez ciebie
        </Typography>
      </Box>
      <Box sx={styles.events}>
        <Box sx={styles.eventCard}>
          <Box sx={styles.groupInfo}>
            <Box>
              <Typography sx={styles.eventName}>Lorem Ipsum</Typography>
              <Typography sx={styles.eventDateTime}>
                06.09.2024 09:00 - 12:00
              </Typography>
              <Typography sx={styles.eventDescription}>
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
                color: theme.colors.white_100,
                marginTop: '-400%',
                marginRight: '-100%',
              }}
            />
          </IconButton>
        </Box>
        <Box sx={styles.eventCard}>
          <Box sx={styles.groupInfo}>
            <Box>
              <Typography sx={styles.eventName}>Lorem Ipsum</Typography>
              <Typography sx={styles.eventDateTime}>
                06.09.2024 09:00 - 12:00
              </Typography>
              <Typography sx={styles.eventDescription}>
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
                color: theme.colors.white_100,
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

export default ManageEvents;
