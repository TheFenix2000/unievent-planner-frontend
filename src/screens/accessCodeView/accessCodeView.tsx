import { faPlus, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Wrapper,
  AddButton,
  Heading,
  CodeContainer,
  GroupPicture,
  PictureAndName,
  LeftSideCodeContainer,
  RightSideCodeContainer,
  CodeNumber,
  GroupName,
  UsesLeft,
  ExpireDate,
  GenerateDate,
  SearchBar,
} from './accessCodeViewStyle';

export const AccessCodeView = () => {
  return (
    <>
      <Wrapper>
        <Heading>Zarządzaj kodami dostępu</Heading>
        <SearchBar
          placeholder="Wyszukaj grupę"
          startAdornment={
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              style={{ marginRight: 8 }}
            />
          }
        ></SearchBar>

        <CodeContainer>
          <LeftSideCodeContainer>
            <PictureAndName>
              <GroupPicture src="src\assets\images\cat.png" />
              <GroupName>InformatykaStosowana2023</GroupName>
            </PictureAndName>
            <CodeNumber>KjHB!@4</CodeNumber>
          </LeftSideCodeContainer>
          <RightSideCodeContainer>
            <UsesLeft>Pozostało 5 użyć</UsesLeft>
            <ExpireDate>Ważny do 05.05.2025</ExpireDate>
            <GenerateDate>Wygenerowany 12.04.2024</GenerateDate>
          </RightSideCodeContainer>
        </CodeContainer>

        <AddButton variant="contained">
          <FontAwesomeIcon icon={faPlus} style={{ margin: 2 }} />
          Nowy kod
        </AddButton>
      </Wrapper>
    </>
  );
};

export default AccessCodeView;
