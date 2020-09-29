import React, { useLayoutEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Discover from '../Screen/Discover/';
import MoviesContainer from '../Screen/Movies/';
import Search from '../Screen/Search/';
import Tv from '../Screen/Tv/';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Tabs = createBottomTabNavigator();

const getHeader = (route) => {
  return route?.state?.routeNames[route.state.index] || 'Movies';
};

export default ({ navigation, route }) => {
  useLayoutEffect(() => {
    const name = getHeader(route);
    navigation.setOptions({
      title: name,
    });
  }, [route]);

  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName = Platform.OS === 'ios' ? 'ios-' : 'md-';
          if (route.name === 'Movies') {
            iconName += 'film';
          } else if (route.name === 'Tv') {
            iconName += 'tv';
          } else if (route.name === 'Search') {
            iconName += 'search';
          } else if (route.name === 'Discover') {
            iconName += 'heart';
          }
          return (
            <Ionicons
              name={iconName}
              color={focused ? 'white' : 'gray'}
              size={26}
            />
          );
        },
      })}
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: 'black',
          borderTopColor: 'black',
        },
      }}
    >
      <Tabs.Screen component={MoviesContainer} name="Movies" />
      <Tabs.Screen component={Discover} name="Discover" />
      <Tabs.Screen component={Search} name="Search" />
      <Tabs.Screen component={Tv} name="Tv" />
    </Tabs.Navigator>
  );
};
