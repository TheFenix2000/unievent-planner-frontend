import React, { useState } from 'react';

import { Modal } from '@mui/material';

import {
  BootstrapButton,
  Wrapper,
  InputField,
  AvatarIcon,
  ModalBox,
  ImageContainer,
  SelectableImage,
  SelectedImage,
  SelectedImageContainer,
  ImageContainerHeader,
} from './inputUserInfoStyles';
//obrazki z api jako placeholder do pickera
const gotoweAvatary = [
  'http://holderimg.com/api/v1?image=1',
  'http://holderimg.com/api/v1?image=2',
  'http://holderimg.com/api/v1?image=3',
  'http://holderimg.com/api/v1?image=3',
  'http://holderimg.com/api/v1?image=3',
  'http://holderimg.com/api/v1?image=3',
  'http://holderimg.com/api/v1?image=3',
  'http://holderimg.com/api/v1?image=3',
  'http://holderimg.com/api/v1?image=3',
  'http://holderimg.com/api/v1?image=3',
  'http://holderimg.com/api/v1?image=3',
  'http://holderimg.com/api/v1?image=3',
  'http://holderimg.com/api/v1?image=3',
  'http://holderimg.com/api/v1?image=1',
  'http://holderimg.com/api/v1?image=2',
];

const InputUserInfo = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageSelect = (image: string) => {
    setSelectedImage(image);
    setIsModalOpen(false);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Wrapper>
      <InputField label="Email" variant="outlined" disabled />
      <InputField label="Nazwa użytkownika" variant="outlined" />
      <InputField label="Imię" variant="outlined" />
      <InputField label="Nazwisko" variant="outlined" />
      <SelectedImageContainer>
        {selectedImage ? (
          <SelectedImage
            src={selectedImage}
            alt="Avatar"
            onClick={handleOpenModal}
          />
        ) : (
          <AvatarIcon onClick={handleOpenModal} />
        )}
      </SelectedImageContainer>
      <BootstrapButton variant="contained">Zatwierdź</BootstrapButton>
      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <ModalBox>
          <ImageContainerHeader>Wybierz avatar</ImageContainerHeader>
          <ImageContainer>
            {gotoweAvatary.map((image, index) => (
              <SelectableImage
                key={index}
                src={image}
                alt={`Avatar ${index}`}
                selected={selectedImage === image}
                onClick={() => handleImageSelect(image)}
              />
            ))}
          </ImageContainer>
        </ModalBox>
      </Modal>
    </Wrapper>
  );
};

export default InputUserInfo;
