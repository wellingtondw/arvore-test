import React from 'react';
import {Text} from 'react-native';
import {Container} from '../../utils/common.styles';
import AppBar from '../../components/app-bar';
const Search = props => {
  return (
    <Container>
      <AppBar {...props} />
      <Text>Search</Text>
    </Container>
  );
};

export default Search;
