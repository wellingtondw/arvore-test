import React from 'react';
import {Text} from 'react-native';
import {Container} from '../../utils/common.styles';
import {SearchAppBar} from '../../components/app-bar';
const Home = props => {
  return (
    <Container>
      <SearchAppBar {...props} />
      <Text>Home</Text>
    </Container>
  );
};

export default Home;
