import React from 'react';
import { IconButton, Button, Box, Typography, Avatar } from '@mui/material';
import { Groups, Person, Edit } from '@mui/icons-material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { styles, BackButton, BackButtonWrapper } from './GroupManagementStyles';

const GroupManagement: React.FC = () => {
  return (
    <Box sx={styles.container}>
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

      <BackButtonWrapper>
        <BackButton>
          <ArrowBackIcon />
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
