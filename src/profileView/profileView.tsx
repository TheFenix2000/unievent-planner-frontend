import * as React from 'react';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';

import {
  Wrapper,
  ChangePasswordButton,
  BackButton,
  BackButtonWrapper,
  EditButton,
  EditButtonWrapper,
  AvatarWrapper,
  Item,
} from './profileViewStyles';

export const ProfileView = () => {
  function generate(element: React.ReactElement) {
    return [0, 1, 2, 3, 4].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }

  return (
    <Wrapper>
      <BackButtonWrapper>
        <BackButton>
          <ArrowBackIcon />
        </BackButton>
      </BackButtonWrapper>

      <AvatarWrapper>
        <Avatar sx={{ width: 130, height: 130 }} src="" />
        <EditButtonWrapper>
          <EditButton>
            <EditIcon />
          </EditButton>
        </EditButtonWrapper>

        <h2>Nazwa uzytkownika</h2>
      </AvatarWrapper>

      <ChangePasswordButton variant="contained">
        Zmień hasło
      </ChangePasswordButton>

      <h2>Grupy w których jesteś starostą:</h2>
      <List sx={{ width: '100%' }}>
        {generate(
          <Item>
            <ListItemAvatar>
              <Avatar src={''}></Avatar>
            </ListItemAvatar>
            <ListItemText
              sx={{ wordWrap: 'break-word' }}
              primary="InformatykaStosowana2023JestSuper!"
              secondary="42 członków"
            />
          </Item>,
        )}
      </List>

      <h2>Grupy do których nalezysz:</h2>
      <List sx={{ width: '100%' }}>
        {generate(
          <Item>
            <ListItemAvatar>
              <Avatar src={''}></Avatar>
            </ListItemAvatar>
            <ListItemText
              sx={{ wordWrap: 'break-word' }}
              primary="InformatykaStosowana2023"
              secondary="Starosta: jankowalski"
            />
          </Item>,
        )}
      </List>
    </Wrapper>
  );
};
