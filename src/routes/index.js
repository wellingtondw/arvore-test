import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import Home from '../screens/home';
import Search from '../screens/search';

const Stack = createStackNavigator();

const options = {
  header: () => null,
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator mode="modal">
        <Stack.Screen name="Home" component={Home} options={options} />
        <Stack.Screen name="Search" component={Search} options={options} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
