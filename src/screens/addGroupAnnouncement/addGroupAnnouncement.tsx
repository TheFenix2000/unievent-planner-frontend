import React, { useState } from 'react';

import { MenuItem } from '@mui/material';

import {
  BootstrapButton,
  Wrapper,
  InputField,
  CustomSwitch,
  ImportantSwitchWrapper,
  ImportantSwitchLabel,
  TitleBox,
  TitleContent,
} from './addGroupAnnouncementStyles';

const AddGroupAnnouncement = () => {
  const [opis, setOpis] = useState('');
  const maxOpis = 200;

  const handleOpisLimit = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length <= maxOpis) {
      setOpis(event.target.value);
    }
  };

  return (
    <Wrapper>
      <TitleBox>
        <TitleContent>Dodaj ogłoszenie dla grupy</TitleContent>
      </TitleBox>
      <InputField label="Nazwa ogłoszenia" variant="outlined" fullWidth />
      <InputField
        label="Opis"
        variant="outlined"
        onChange={handleOpisLimit}
        fullWidth
        multiline
        rows={4}
        inputProps={{ maxLength: maxOpis }}
        helperText={`${opis.length}/${maxOpis} znaków`}
        FormHelperTextProps={{
          style: {
            fontSize: '0.75rem',
            fontWeight: 400,
            textAlign: 'right',
            fontFamily: 'Inter',
          },
        }}
      />
      <InputField select label="Grupa">
        <MenuItem value="group1">Grupa 1</MenuItem>
        <MenuItem value="group2">Grupa 2</MenuItem>
        <MenuItem value="group3">Grupa 3</MenuItem>
      </InputField>
      <ImportantSwitchWrapper>
        <ImportantSwitchLabel>Ważne</ImportantSwitchLabel>
        <CustomSwitch />
      </ImportantSwitchWrapper>
      <BootstrapButton variant="contained">Dodaj do ogłoszeń</BootstrapButton>
    </Wrapper>
  );
};

export default AddGroupAnnouncement;
