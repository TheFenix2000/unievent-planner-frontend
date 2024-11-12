import * as React from 'react';

import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormControl, FormControlState } from '@mui/base/FormControl';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';

import {
  Wrapper,
  ChangePasswordButton,
  EditButton,
  EditButtonWrapper,
  AvatarWrapper,
  Item,
  StyledInput,
  ChangePasswordForm,
  SaveChangesButton,
} from './profileViewStyles';

export const ProfileView = () => {
  const [showPasswordForm, setShowPasswordForm] = React.useState(false);

  function generate(element: React.ReactElement) {
    return [0, 1, 2, 3, 4].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }

  return (
    <Wrapper>
      <AvatarWrapper>
        <Avatar sx={{ width: 130, height: 130 }} src="" />
        <EditButtonWrapper>
          <EditButton>
            <FontAwesomeIcon icon={faPen} />
          </EditButton>
        </EditButtonWrapper>

        <p>Nazwa uzytkownika</p>
      </AvatarWrapper>

      <ChangePasswordButton
        variant="contained"
        onClick={() => setShowPasswordForm(!showPasswordForm)}
      >
        Zmień hasło
      </ChangePasswordButton>

      {showPasswordForm && (
        <ChangePasswordForm>
          <span style={{ alignSelf: 'flex-start', marginBottom: 10 }}>
            Zmień hasło
          </span>
          <FormControl style={{ padding: 5 }} defaultValue="" required>
            {({ filled }: FormControlState) => (
              <React.Fragment>
                <StyledInput
                  placeholder="hasło"
                  className={filled ? 'filled' : ''}
                />
              </React.Fragment>
            )}
          </FormControl>
          <FormControl style={{ padding: 5 }} defaultValue="" required>
            {({ filled }: FormControlState) => (
              <React.Fragment>
                <StyledInput
                  placeholder="nowe hasło"
                  className={filled ? 'filled' : ''}
                />
              </React.Fragment>
            )}
          </FormControl>
          <FormControl style={{ padding: 5 }} defaultValue="" required>
            {({ filled }: FormControlState) => (
              <React.Fragment>
                <StyledInput
                  placeholder="powtórz hasło"
                  className={filled ? 'filled' : ''}
                />
              </React.Fragment>
            )}
          </FormControl>
          <SaveChangesButton variant="contained">
            Zapisz zmiany
          </SaveChangesButton>
        </ChangePasswordForm>
      )}

      <p style={{ fontSize: '22px', margin: '.5rem' }}>
        Grupy w których jesteś starostą:
      </p>
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

      <p style={{ fontSize: '22px', margin: '.5rem' }}>
        Grupy do których nalezysz:
      </p>
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
