import { faPlus, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Wrapper,
  AddButton,
  IconWrapper,
  Heading,
  CodeContainer,
  GroupPicture,
  CodeContainerColumns,
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
          <CodeContainerColumns container spacing={3} sx={{ flexGrow: 1 }}>
            <CodeContainerColumns item xs={1}>
              <GroupPicture src="src\assets\images\cat.png" />
            </CodeContainerColumns>
            <CodeContainerColumns item xs={6}>
              <GroupName>InformatykaStosowana2023</GroupName>
              <CodeNumber>KjHB!@4</CodeNumber>
            </CodeContainerColumns>
            <CodeContainerColumns item xs={5}>
              <UsesLeft>Pozostało 5 użyć</UsesLeft>
              <ExpireDate>Ważny do 05.05.2025</ExpireDate>
              <GenerateDate>Wygenerowany 12.04.2024</GenerateDate>
            </CodeContainerColumns>
          </CodeContainerColumns>
        </CodeContainer>
        <AddButton variant="contained">
          <IconWrapper>
            <FontAwesomeIcon icon={faPlus} />
          </IconWrapper>
          Nowy kod
        </AddButton>
      </Wrapper>
    </>
  );
};

export default AccessCodeView;
