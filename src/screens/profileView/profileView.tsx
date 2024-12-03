import * as React from 'react';

import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormControl, FormControlState } from '@mui/base/FormControl';
import Avatar from '@mui/material/Avatar';
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
  StyledParagraph,
  StyledList,
} from './profileViewStyles';

export const ProfileView = () => {
  const [showPasswordForm, setShowPasswordForm] = React.useState(false);

  type Group = {
    zdjecie: string;
    nazwa_grupy: string;
    ilosc_czlonkow: number;
  };

  function generate(grupy: Group[]) {
    return grupy.map((grupa, index) => (
      <Item key={index}>
        <ListItemAvatar>
          <Avatar src={grupa.zdjecie}></Avatar>
        </ListItemAvatar>
        <ListItemText
          sx={{ wordWrap: 'break-word' }}
          primary={grupa.nazwa_grupy}
          secondary={`${grupa.ilosc_czlonkow} członków`}
        />
      </Item>
    ));
  }

  // Przykładowe dane
  const MasterGrups: Group[] = [
    {
      zdjecie: 'zdjecie.png',
      nazwa_grupy: 'Informatyka Stosowana 2023',
      ilosc_czlonkow: 25,
    },
    {
      zdjecie: 'zdjecie2.png',
      nazwa_grupy: 'Programowanie w JavaScript',
      ilosc_czlonkow: 15,
    },
    //...
  ];
  const Grups: Group[] = [
    {
      zdjecie: 'zdjecie3.png',
      nazwa_grupy: 'Systemy operacyjne',
      ilosc_czlonkow: 25,
    },
    {
      zdjecie: 'zdjecie4.png',
      nazwa_grupy: 'PP4',
      ilosc_czlonkow: 35,
    },
    //...
  ];

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

      <StyledParagraph>Grupy w których jesteś starostą:</StyledParagraph>
      <StyledList>{generate(MasterGrups)}</StyledList>

      <StyledParagraph>Grupy do których nalezysz:</StyledParagraph>
      <StyledList>{generate(Grups)}</StyledList>
    </Wrapper>
  );
};
