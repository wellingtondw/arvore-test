import React from 'react';
import {Container, Text} from './styles';
import {View} from 'react-native';
import BackButton from '../back-button';

const SearchAppBar = props => {
  const handleGoBack = () => {
    props.navigation.goBack();
  };

  return (
    <Container>
      <BackButton onPress={handleGoBack} />
      <Text>Resultado de Busca</Text>
      <View />
    </Container>
  );
};

export default SearchAppBar;
