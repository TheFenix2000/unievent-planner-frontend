import { Avatar } from '@mui/material';
import styled from 'styled-components';

import { theme } from '../../assets/styles/theme';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 2rem 1.25rem;
  max-width: 31.25rem;
  margin: 0 auto;
  height: 100vh;

  .MuiTextField-root {
    margin-bottom: 1rem;

    .MuiInputLabel-root {
      color: ${theme.colors.grey_50};

      &.Mui-focused {
        color: ${theme.colors.red_100};
      }
    }

    .MuiOutlinedInput-root {
      border-radius: 0.75rem;

      & fieldset {
        border-color: ${theme.colors.red_100};
        border-width: 0.125rem;
        border-radius: 0.75rem;
      }

      &:hover fieldset {
        border-color: ${theme.colors.red_50};
      }

      &.Mui-focused fieldset {
        border-color: ${theme.colors.red_100};
      }
    }
  }

  .MuiButton-root {
    background-color: ${theme.colors.red_100};
    color: ${theme.colors.white};
    text-transform: none;
    font-size: 1rem;
    padding: 0.75rem;
    border-radius: 0.75rem;
    margin-top: 2rem;

    &:hover {
      background-color: ${theme.colors.red_50};
    }
  }
`;

export const StyledAvatar = styled(Avatar)`
  width: 8.75rem !important;
  height: 8.75rem !important;
  margin: 0 auto;
  border: 0.1875rem solid ${theme.colors.red_100};
  box-sizing: border-box;
`;

export const PenIconContainer = styled.div`
  position: relative;
  display: inline-block;
  top: -2.2rem;
  left: 5.8rem;
  cursor: pointer;

  width: 1.875rem;
  height: 1.875rem;
  border: 0.125rem solid ${theme.colors.red_100};
  border-radius: 50%;
  background-color: ${theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputFieldWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const CounterContainer = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 0.75rem;
  font-size: 0.75rem;
  color: ${theme.colors.grey_50};
  pointer-events: none;
`;
