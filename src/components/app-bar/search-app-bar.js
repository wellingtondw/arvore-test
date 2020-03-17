import React, {useState} from 'react';
import {Container} from './styles';
import Logo from '../logo';
import SearchButton from '../search-button';
import SearchInput from '../search-input';
const SearchAppBar = props => {
  const [showSearch, setShowSearch] = useState(false);

  const handleShowSearch = () => {
    if (!showSearch) {
      return setShowSearch(true);
    }

    props.navigation.navigate('Search');
  };

  return (
    <Container search={showSearch}>
      {!showSearch && <Logo />}
      {showSearch && <SearchInput placeholder="Buscar por livros ou autores" />}
      <SearchButton onPress={handleShowSearch} />
    </Container>
  );
};

export default SearchAppBar;
