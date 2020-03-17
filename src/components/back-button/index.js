import React from 'react';
import {BackButtonStyled, BackButtonImage} from './styles';
import BackIcon from '../../assets/icons/caret-left.png';

const BackButton = props => {
  return (
    <BackButtonStyled {...props}>
      <BackButtonImage source={BackIcon} />
    </BackButtonStyled>
  );
};

export default BackButton;
