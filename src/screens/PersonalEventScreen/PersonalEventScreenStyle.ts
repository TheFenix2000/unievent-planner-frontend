import { Box } from '@mui/material';
import styled from 'styled-components';

import { theme } from '../../assets/styles/theme';

export const Wrapper = styled(Box)`
  font-family: 'Inter', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  font-size: 1.25rem;
  padding: 2rem;
  position: relative;
  gap: 1rem;
`;

export const Title = styled(Box)`
  display: flex;
  width: 23.5rem;
  font-size: 2rem
  margin: 0 0 1.5rem 0;
`;

const InputBox = styled(Box)`
  display: flex;
  align-items: center;
  border-radius: 0.625rem;
  width: 23.5rem;
  height: 4rem;
  padding-left: 0.625rem;
  position: relative;
`;

const Label = styled.label<{ active: boolean }>`
  position: absolute;
  left: 0.625rem;
  top: ${({ active }) => (active ? '-1rem' : '2rem')};
  transform: ${({ active }) => (active ? 'scale(0.75)' : 'translateY(-50%)')};
  background-color: ${theme.colors.white_100};
  transition: all 0.3s ease;
`;

const InputField = styled.textarea`
  border: none;
  outline: none;
  width: 80%;
  height: 100%;
  background: transparent;
  resize: none;
  overflow-wrap: break-word;
  word-wrap: break-word;
  margin-top: 2.5rem;
  margin-left: 1.25rem;
  font-size: 1rem;
`;

export const Name = styled(InputBox)<{ $nameOn: boolean }>`
  border: solid
    ${({ $nameOn }) =>
      $nameOn ? theme.colors.red_100 : theme.colors.black_100};
`;

export const NameLabel = styled(Label)<{ $nameOn: boolean }>`
  color: ${({ $nameOn }) =>
    $nameOn ? theme.colors.red_100 : theme.colors.black_100};
`;

export const InputFieldName = styled(InputField)``;

export const Date = styled(InputBox)<{ $dateOn: boolean }>`
  border: solid
    ${({ $dateOn }) =>
      $dateOn ? theme.colors.red_100 : theme.colors.black_100};
`;

export const DateLabel = styled(Label)<{ $dateOn: boolean }>`
  color: ${({ $dateOn }) =>
    $dateOn ? theme.colors.red_100 : theme.colors.black_100};
`;

export const Time = styled(InputBox)<{ $timeOn: boolean }>`
  border: solid
    ${({ $timeOn }) =>
      $timeOn ? theme.colors.red_100 : theme.colors.black_100};
`;

export const TimeLabel = styled(Label)<{ $timeOn: boolean }>`
  color: ${({ $timeOn }) =>
    $timeOn ? theme.colors.red_100 : theme.colors.black_100};
`;

export const DescriptionBox = styled(InputBox)<{ $descriptionOn: boolean }>`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border: solid
    ${({ $descriptionOn }) =>
      $descriptionOn ? theme.colors.red_100 : theme.colors.black_100};
  height: 12.5rem;
  padding-top: 0.625rem;
`;

export const DescriptionLabel = styled(Label)<{ $descriptionOn: boolean }>`
  color: ${({ $descriptionOn }) =>
    $descriptionOn ? theme.colors.red_100 : theme.colors.black_100};
`;

export const InputFieldDescription = styled(InputField)`
  margin-top: 0.625rem;
`;

export const Description = styled(Box)`
  display: block;
  width: 23.5rem;
  font-size: 1rem;
  text-align: right;
  margin-top: -1.5rem;
  color: ${theme.colors.grey_50};
`;

export const AddButton = styled(Box)`
  display: block;
  border-radius: 0.625rem;
  width: 23.5rem;
  height: 4rem;
  padding-left: 0.625rem;
  background-color: ${theme.colors.red_100};
  color: ${theme.colors.white_100};
  font-size: 1.25rem;
  text-align: center;
  text-decoration: none;
  button {
    all: unset;
    width: 100%;
    height: 100%;
  }
`;
