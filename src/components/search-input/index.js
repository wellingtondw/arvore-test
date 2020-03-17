import React from 'react';
import {Container, SearchInputStyled} from './styles';

const SearchInput = props => {
  return (
    <Container>
      <SearchInputStyled {...props} />
    </Container>
  );
};

export default SearchInput;
