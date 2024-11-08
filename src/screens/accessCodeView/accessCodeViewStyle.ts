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
  width: 80vw;
  font-family: Inter, sans-serif;
  font-size: 2rem;
  font-weight: 400;
  text-align: left;
  margin: 2rem 1rem 2rem 1rem;
`;

export const SearchBar = styled(Input)`
  border-bottom: 0.125rem solid ${theme.colors.grey_25};
  width: 98%;
  margin: 0.5rem auto;
  font-size: 1rem;
  & .MuiInputBase-input::placeholder {
    color: ${theme.colors.black_100};
    opacity: 1;
  }
`;

export const CodeContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  gap: 0.05rem;
  border-radius: 0.5rem;
  padding: 0.05rem 0.1rem;
  background-color: ${theme.colors.red_25};
`;

export const LeftSideCodeContainer = styled(Container)``;
export const RightSideCodeContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 0.5rem 0.5rem 0.1rem;
`;

export const GroupName = styled(Typography)`
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 0.5rem;
  text-align: center;
  margin: 0.75rem;
  }
`;

export const PictureAndName = styled(Box)`
  display: flex;
  margin-top: 0.75rem;
`;

export const CodeNumber = styled(Typography)`
  font-family: Inter, sans-serif;
  font-size: 1.25rem;
  text-align: center;
  font-weight: bold;
  font-weight: 400;
  padding: 0.05rem;
  }
`;

export const SideText = styled(Typography)`
  color: ${theme.colors.grey_50};
  font-family: Inter, sans-serif;
  font-size: 0.5rem;
  font-weight: 400;
  text-align: left;
  padding-bottom: 0.5rem;
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
  padding: 1rem;
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
  font-size: 2rem;
  border-radius: 2rem;
`;
