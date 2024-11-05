import { styled } from '@mui/material';
import {
  Avatar,
  Box,
  Button,
  Typography,
  Card,
  Grid,
  Input,
} from '@mui/material';

import { theme } from '../../assets/styles/theme';

export const Heading = styled(Typography)`
  width: 357px;
  height: 24px;
  left: 40px;
  gap: 0px;
  opacity: 0px;
  font-family: Inter;
  font-size: 38px;
  font-weight: 400;
  line-height: 38.73px;
  text-align: left;
  margin: 100px 12px 32px 12px;
`;

export const SearchBar = styled(Input)`
  border-bottom: 2px solid #b7b7b78c;
  width: 362px;
  height: 56px;
  top: 8px;
  gap: 0px;
  opacity: 0px;
  margin: 24px 0 32px 12px;
  justify-self: center;
  font-size: 24px;
  & .MuiInputBase-input::placeholder {
    color: #000000;
    opacity: 1;
  }
`;

export const CodeContainer = styled(Card)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px;
  max-width: 375px;
  background-color: ${theme.colors.red_25};
  border-radius: 12px;
  margin: 4px;
  box-sizing: border-box;
  gap: 12px;
  width: 100%;
  height: 95px;
  top: 389px;
  left: 35px;
  opacity: 0px;
`;

export const CodeContainerColumns = styled(Grid)`
  padding: 2px;
`;
export const GroupName = styled(Typography)`
  font-family: Inter;
  font-size: 12px;
  font-weight: 400;
  line-height: 14.52px;
  text-align: left;
  margin: 12px 0 0 0;
  line-height: 1.5;
  text-align: center;
`;

export const CodeNumber = styled(Typography)`
  font-family: Inter;
  font-size: 32px;
  font-weight: 400;
  line-height: 38.73px;
  margin: 24px 4px 4px 12x;
  line-height: 1.5;
  text-align: center;
`;

export const UsesLeft = styled(Typography)`
  color: #797979;
  font-family: Inter;
  font-size: 10px;
  font-weight: 400;
  line-height: 12.1px;
  text-align: left;
  margin-top: 16px;
`;

export const ExpireDate = styled(Typography)`
  color: #939393;
  font-family: Inter;
  font-size: 10px;
  font-weight: 400;
  line-height: 12.1px;
  text-align: left;
  margin-top: 8px;
`;

export const GenerateDate = styled(Typography)`
  color: #939393;
  font-family: Inter;
  font-size: 10px;
  font-weight: 400;
  line-height: 12.1px;
  text-align: left;
  margin-top: 8px;
`;

export const GroupPicture = styled(Avatar)`
  width: 37px;
  height: 37px;
  margin: 2px 2px 0 2px;
`;

export const BackArrow = styled(Avatar)`
  width: 38px;
  height: 38px;
  top: 12px;
  gap: 0px;
  opacity: 0px;
  font-size: 26px;
  color: #000000;
  background-color: #ffffff;
  border: solid 2px #bbbbbb;
`;

export const BackButton = styled(Button)`
  width: 38px;
  height: 38px;
  position: absolute;
  left: 16px;
  top: 12px;
  gap: 0px;
  opacity: 1;
  border-radius: 38px;
`;

export const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
  padding: 16px 32px;
  box-sizing: border-box;
  position: relative;
  overflow-y: auto;
  font-family: 'Inter', sans-serif;
  max-width: 600px;
  margin: auto;
`;

export const AddButton = styled(Button)`
  background-color: ${theme.colors.red_100};
  color: ${theme.colors.white_100};
  text-transform: none;
  position: absolute;
  bottom: 0;
  left: 16px;
  &:hover {
    background-color: ${theme.colors.red_100};
  }
  margin: 0;
  padding: 12px 16px;
  font-size: 24px;
  border-radius: 21px;
`;

export const IconWrapper = styled('span')`
  margin-right: 8px;
`;
