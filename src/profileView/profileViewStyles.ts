import { styled } from '@mui/material';
import { Box, Button, IconButton, ListItem } from '@mui/material';

export const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding: 32px;
  box-sizing: border-box;
  position: relative;
  @media (max-width: 600px) {
    padding: 16px;
  }
`;

export const BackButton = styled(IconButton)`\
    // position: absolute;
    border-radius: 9999px;
    border: 2px solid #bbbbbb;
  @media {
    color: black;
  }
`;

export const BackButtonWrapper = styled(Box)`
  display: flex;
  margin-right: auto;
  justify-content: flex-start;
  background-color: #;
`;

export const EditButton = styled(IconButton)`\
    // position: absolute;
    border-radius: 9999px;
    border: 2px solid #bbbbbb;
      background-color: white;
  @media {
    color: black;
  }
`;

export const EditButtonWrapper = styled(Box)`
  display: flex;
  position: absolute;
  right: 2rem;
  top: 6rem;
  margin-right: auto;
  justify-content: flex-start;
  background-color: #;
`;

export const AvatarWrapper = styled(Box)`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #;
  margin: 0.5rem;
`;

export const ChangePasswordButton = styled(Button)`
  background-color: #f13d42;
  color: white;
  &:hover {
    background-color: #f13d42;
  }
  margin: 10px 0 15px;
  padding: 16px 0;
  font-size: 18px;
  border-radius: 8px;
  width: 90%;
  @media (max-width: 600px) {
    margin: 5px 0 10px;
    padding: 12px 0;
    font-size: 16px;
  }
`;

export const Item = styled(ListItem)`
    position absolute;
  background-color: #ffcccc;
  border-radius: 12px;
  margin-bottom: 8px;
`;
