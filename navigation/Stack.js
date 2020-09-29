import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Detail from '../Screen/Detail/';
import Tabs from '../navigation/tab';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: 'black',
        borderBottomColor: 'black',
        shadowColor: 'black',
      },
      headerTintColor: 'white',
      headerBackTitleVisible: false,
      headerTitleAlign: 'center',
    }}
  >
    <Stack.Screen component={Tabs} name="Tabs" />
    <Stack.Screen component={Detail} name="Detail" />
  </Stack.Navigator>
);
