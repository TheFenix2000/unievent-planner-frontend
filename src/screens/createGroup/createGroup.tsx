import React, { useState } from 'react';

import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TextField, Button, Box } from '@mui/material';

import {
  Wrapper,
  StyledAvatar,
  PenIconContainer,
  InputFieldWrapper,
  CounterContainer,
} from './createGroupStyles';

export const CreateGroupScreen: React.FC = () => {
  const [groupName, setGroupName] = useState<string>('');
  const [direction, setDirection] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handleGenerateCode = (): void => {
    console.log('Group created:', { groupName, direction, description });
  };

  return (
    <Wrapper>
      <Box sx={{ textAlign: 'center' }}>
        <StyledAvatar src="/group/image.png" alt="Group Avatar" />
        <PenIconContainer>
          <FontAwesomeIcon
            icon={faPen}
            style={{ fontSize: 16, color: 'gray' }}
          />
        </PenIconContainer>
      </Box>
      <TextField
        label="Nazwa grupy"
        required
        fullWidth
        value={groupName}
        onChange={(e) => setGroupName(e.target.value)}
        variant="outlined"
        margin="normal"
      />
      <TextField
        label="Kierunek"
        fullWidth
        value={direction}
        onChange={(e) => setDirection(e.target.value)}
        variant="outlined"
        margin="normal"
      />
      <InputFieldWrapper>
        <TextField
          label="Opis"
          fullWidth
          multiline
          rows={4}
          inputProps={{ maxLength: 150 }}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          variant="outlined"
          margin="normal"
        />
        <CounterContainer>{`${description.length}/150`}</CounterContainer>
      </InputFieldWrapper>
      <Button
        fullWidth
        variant="contained"
        color="secondary"
        sx={{ marginTop: 3 }}
        onClick={handleGenerateCode}
      >
        Wygeneruj kod grupy
      </Button>
    </Wrapper>
  );
};
