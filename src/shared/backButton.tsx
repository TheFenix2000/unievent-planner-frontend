import React from 'react';

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { BackButtonWrapper, BackButton } from './backButton';

const BackButtonComponent = () => (
  <BackButtonWrapper>
    <BackButton>
      <FontAwesomeIcon icon={faArrowLeft} />
    </BackButton>
  </BackButtonWrapper>
);

export default BackButtonComponent;
