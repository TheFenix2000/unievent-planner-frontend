import * as React from 'react';

import {
  faMagnifyingGlass,
  faPlus,
  faPen,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconButton, Box, InputAdornment, Typography } from '@mui/material';

import {
  Wrapper,
  NewGroupButton,
  Header,
  SearchButton,
  GroupCard,
  Groups,
} from './manageGroupsAdminStyle';
import LogoSVG from '../../../public/univent_logo.svg';

const groupData = [
  {
    name: 'Informatyka Stosowana 2023',
    memberCount: 42,
    avatar: LogoSVG,
  },
  {
    name: 'Informatyka Stosowana 2024',
    memberCount: 35,
    avatar: LogoSVG,
  },
  {
    name: 'Informatyka Stosowana 2025',
    memberCount: 50,
    avatar: LogoSVG,
  },
];

const ManageGroupsAdmin = () => {
  return (
    <Wrapper>
      <Header variant="h4">Zarządzaj grupami</Header>
      <SearchButton
        placeholder="Wyszukaj grupę po nazwie"
        variant="standard"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </InputAdornment>
          ),
        }}
      />
      <Groups>
        {groupData.map((group, index) => (
          <GroupCard key={index}>
            <img src={group.avatar} alt={`${group.name} Avatar`} />
            <Box className="group-info">
              <Typography className="group-name">{group.name}</Typography>
              <Typography className="member-count">
                Liczba członków: {group.memberCount}
              </Typography>
            </Box>
            <IconButton
              onClick={(event) => {
                event.stopPropagation();
                console.log('click');
              }}
              className="edit-button"
            >
              <FontAwesomeIcon icon={faPen} />
            </IconButton>
          </GroupCard>
        ))}
      </Groups>
      <NewGroupButton>
        <FontAwesomeIcon icon={faPlus} style={{ marginRight: '0.5rem' }} />
        Utwórz nową grupę
      </NewGroupButton>
    </Wrapper>
  );
};

export default ManageGroupsAdmin;
