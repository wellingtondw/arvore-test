import React from 'react';
import searchIcon from '../../assets/icons/search.png';

import {SearchButtonStyled, SearchIcon} from './styles';

const SearchButton = props => {
  return (
    <SearchButtonStyled {...props}>
      <SearchIcon source={searchIcon} />
    </SearchButtonStyled>
  );
};

export default SearchButton;
