import { useRef } from 'react';

import { Typography } from '@mui/material';

import {
  Wrapper,
  Content,
  GroupCodeInput,
  GroupCodeField,
  JoinButton,
  CreateGroupButton,
  SvgContainer,
  Logo,
  StyledTypography,
} from './JoinGroupScreenStyles';

const JoinGroup = () => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const { value } = e.target;

    if (value.length === 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pasteData = e.clipboardData.getData('Text').slice(0, 6);
    pasteData.split('').forEach((char, index) => {
      if (inputRefs.current[index]) {
        inputRefs.current[index]!.value = char;
        if (index < inputRefs.current.length - 1) {
          inputRefs.current[index + 1]?.focus();
        }
      }
    });
    e.preventDefault();
  };

  return (
    <Wrapper>
      <SvgContainer>
        <Logo src="src/assets/svg/UnieventFont.svg" />
        <Logo src="src/assets/svg/UnieventLogoSmall.svg" />
      </SvgContainer>
      <Content>
        <Typography
          variant="h4"
          sx={{ fontWeight: 'bold', marginTop: '20px', fontSize: '2rem' }}
        >
          Witaj, Jan Kowalski!
        </Typography>
        <Typography
          variant="h5"
          sx={{ fontSize: '1.5rem', margin: '0 0 1.5rem 0' }}
          gutterBottom
        >
          Podaj kod grupy, do której chcesz dołączyć
        </Typography>
        <GroupCodeInput>
          {Array.from({ length: 6 }).map((_, index) => (
            <GroupCodeField
              key={index}
              inputProps={{ maxLength: 1 }}
              inputRef={(el: HTMLInputElement | null) =>
                (inputRefs.current[index] = el)
              }
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange(e, index)
              }
              onPaste={index === 0 ? handlePaste : undefined}
            />
          ))}
        </GroupCodeInput>
        <StyledTypography variant="body1" gutterBottom>
          Czym jest kod grupy?
        </StyledTypography>
        <JoinButton variant="contained">Dołącz do grupy</JoinButton>
        <StyledTypography variant="body1">lub</StyledTypography>
        <CreateGroupButton variant="outlined">Utwórz grupę</CreateGroupButton>
      </Content>
    </Wrapper>
  );
};

export default JoinGroup;
