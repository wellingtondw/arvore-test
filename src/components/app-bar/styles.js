import styled from 'styled-components/native';
import {colors} from '../../config/ui';
export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 56px;
  padding: 16px;
  background-color: ${props =>
    props.search ? colors.white : colors.lightBlue};
  elevation: ${props => (props.search ? 6 : 0)};
`;

export const Text = styled.Text`
  color: ${colors.darkGrey};
  font-size: 16px;
`;
