import React from 'react';

import { Edit, ArrowBack } from '@mui/icons-material';
import { IconButton, Button, Box, Typography, Avatar } from '@mui/material';

import Header from '../../shared/header';
import {
  styles,
  BackButton,
  BackButtonWrapper,
} from '../ManageGroups/GroupManagementStyles';

const GroupManagement = () => {
  return (
    <Box sx={styles.container}>
      <Header />

      <BackButtonWrapper>
        <BackButton>
          <ArrowBack />
        </BackButton>
      </BackButtonWrapper>

      <Box sx={styles.manageGroups}>
        <Typography variant="h5" sx={styles.title}>
          Zarządzaj grupami
        </Typography>
      </Box>

      <Box sx={styles.groupCard}>
        <Box sx={styles.groupInfo}>
          <Avatar sx={styles.groupAvatar}>
            <img
              src="./group-avatar.png"
              alt="Group Avatar"
              style={styles.groupAvatar}
            />
          </Avatar>
          <Box>
            <Typography sx={styles.groupName}>
              Informatyka Stosowana 2023
            </Typography>
            <Typography sx={styles.groupMembers}>42 członków</Typography>
          </Box>
        </Box>
        <IconButton>
          <Edit />
        </IconButton>
      </Box>

      <Box sx={styles.manageButtons}>
        <Button variant="contained" sx={styles.manageButton}>
          Zarządzaj ogłoszeniami
        </Button>
        <Button variant="contained" sx={styles.manageButton}>
          Zarządzaj wydarzeniami
        </Button>
      </Box>
    </Box>
  );
};

export default GroupManagement;
