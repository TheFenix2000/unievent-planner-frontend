import { styled } from '@mui/material';
import {
  Avatar,
  Box,
  Button,
  Container,
  Typography,
  Input,
} from '@mui/material';

import { theme } from '../../assets/styles/theme';

export const Heading = styled(Typography)`
  font-family: Inter, sans-serif;
  font-size: 2rem;
  font-weight: 400;
  text-align: left;
  margin: 0 0 1.5rem 0;
`;

export const SearchBar = styled(Input)`
  border-bottom: 0.125rem solid ${theme.colors.grey_25};
  width: 98%;
  margin: 0.5rem auto;
  font-size: 1.5rem;
  & .MuiInputBase-input::placeholder {
    color: ${theme.colors.black_100};
    opacity: 1;
  }
`;

export const CodeContainers = styled(Container)`
  gap: 1rem;
  flex: 1 1 0%;
  padding: 0rem;
`;

export const CodeContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  gap: 0.05rem;
  border-radius: 0.5rem;
  background-color: ${theme.colors.red_25};
`;

export const LeftSideCodeContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-self: left;
`;
export const RightSideCodeContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-self: right;
  overflow: auto;
  padding: 1.75rem 0.5rem 0.5rem 0.1rem;
`;

export const GroupName = styled(Typography)`
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 0.75rem;
  text-align: center;
  margin: 0.75rem;
`;

export const PictureAndName = styled(Box)`
  display: flex;
  margin-top: 0.75rem;
`;

export const CodeNumber = styled(Typography)`
  font-family: Inter, sans-serif;
  font-size: 1.5rem;
  text-align: center;
  font-weight: bold;
  font-weight: 400;
  padding-bottom: 0.75rem;
`;

export const SideText = styled(Typography)`
  color: ${theme.colors.grey_50};
  font-family: Inter, sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  text-align: left;
  padding-bottom: 0.05rem;
`;

export const UsesLeft = styled(SideText)``;
export const ExpireDate = styled(SideText)``;
export const GenerateDate = styled(SideText)``;
export const GroupPicture = styled(Avatar)``;

export const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
  padding: 0 2rem;
  box-sizing: border-box;
  position: relative;
  overflow-y: auto;
  font-family: 'Inter', sans-serif;
  margin: auto;
`;

export const AddButton = styled(Button)`
  background-color: ${theme.colors.red_100};
  color: ${theme.colors.white_100};
  text-transform: none;
  margin-top: auto;
  margin-right: auto;
  padding: 0.75rem;
  &:hover {
    background-color: ${theme.colors.red_100};
  }
  font-size: 1.5rem;
  border-radius: 2rem;
`;
