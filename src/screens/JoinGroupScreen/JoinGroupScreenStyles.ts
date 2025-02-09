import { Box, Button, Input, Typography } from '@mui/material';
import { styled } from 'styled-components';

export const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  padding: 0 2rem;
  box-sizing: border-box;
  position: relative;
  @media (max-width: 600px) {
    padding: 0 1rem;
  }
`;

export const Content = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 100%;
`;

export const GroupCodeInput = styled(Box)`
  display: flex;
  gap: 1rem;
  margin: 24px 0;
  @media (max-width: 600px) {
    gap: 0.5rem;
    margin: 16px 0;
  }
`;

export const GroupCodeField = styled(Input)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  font-size: 1.25rem;
  text-align: center;
  &::before,
  &::after {
    border-bottom: none !important;
  }
  border-bottom: 2px solid ${({ theme }) => theme.colors.grey_25};
  @media (max-width: 600px) {
    width: 40px;
    height: 40px;
    font-size: 0.75rem;
  }
  input {
    text-align: center;
  }
`;

export const JoinButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.red_100} !important;
  color: ${({ theme }) => theme.colors.white_100};
  &:hover {
    background-color: ${({ theme }) => theme.colors.red_100} !important;
  }
  margin: 55px 0 15px;
  font-size: 1.25rem;
  border-radius: 8px;
  width: 100%;
  @media (max-width: 600px) {
    margin: 40px 0 10px;
    padding: 0.5rem 1.5rem;
    font-size: 0.875rem;
  }
`;

export const CreateGroupButton = styled(Button)`
  border: 1px solid ${({ theme }) => theme.colors.grey_50} !important;
  padding: 1rem 2rem;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.black_100} !important;
  border-radius: 8px;
  width: 100%;
  margin-top: 15px;
  @media (max-width: 600px) {
    font-size: 0.875rem;
    margin-top: 10px;
  }
`;

export const SvgContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 16px;
  width: 100%;
  @media (max-width: 600px) {
    gap: 0.5rem;
    margin-bottom: 8px;
  }
`;

export const Logo = styled('img')`
  margin-bottom: 16px;
  @media (max-width: 600px) {
    margin-bottom: 8px;
  }
`;

export const StyledTypography = styled(Typography)`
  color: ${({ theme }) => theme.colors.light_grey};
  margin-left: auto;
  margin-right: 0;
`;
