import styled from 'styled-components/native';

import {Dimensions} from 'react-native';

const screen = Dimensions.get('window');

export const Container = styled.View`
  width: ${screen.width - 72};
  height: 56px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SearchInputStyled = styled.TextInput`
  flex: 1;
`;
