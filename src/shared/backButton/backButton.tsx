import React from 'react';

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { BackButton, BackButtonWrapper } from './backButtonStyles';

const BackButtonComponent = () => (
  <BackButtonWrapper>
    <BackButton>
      <FontAwesomeIcon icon={faArrowLeft} />
    </BackButton>
  </BackButtonWrapper>
);

export default BackButtonComponent;
