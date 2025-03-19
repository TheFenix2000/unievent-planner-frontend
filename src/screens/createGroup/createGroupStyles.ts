import { Avatar } from '@mui/material';
import styled from 'styled-components';

import { theme } from '../../assets/styles/theme';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.25rem;
  max-width: 31.25rem;
  margin: 0 auto;

  .MuiTextField-root {
    margin-bottom: 1.25rem;
    color: ${theme.colors.red_100};
    .MuiInputLabel-root {
      color: ${theme.colors._100};

      &.Mui-focused {
        color: ${theme.colors.red_100} !important;
      }
    }
    .MuiOutlinedInput-root {
      & fieldset {
        border-color: ${theme.colors._100};
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
    color: #fff;
    text-transform: none; 

    &:hover {
      background-color: ${theme.colors.red_50};
    }
  
`;

export const StyledAvatar = styled(Avatar)`
  width: 6.25rem !important;
  height: 6.25rem !important;
  margin: 0 auto;
  border: 0.1875rem solid ${theme.colors.red_100};
  box-sizing: border-box;
`;

export const PenIconContainer = styled.div`
  position: relative;
  display: inline-block;
  top: -2.2rem;
  left: 4.4rem;
  cursor: pointer;

  width: 1.875rem;
  height: 1.875rem;
  border: 0.125rem solid ${theme.colors.red_100};
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  }
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
