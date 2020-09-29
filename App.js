import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import Stack from './navigation/Stack';
import 'react-native-gesture-handler';

const cacheImages = (images) =>
  images.map((image) => {
    if (typeof image === 'strung') {
      return image.prefetch();
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });

const cacheFont = (fonts) => fonts.map((font) => Font.loadAsync(font));

export default function App() {
  const [isReady, setIsReady] = useState(false);

  const loadAssets = () => {
    const images = cacheImages([
      'http://www.starship-ent.com/img/board_top_image/lijah.jpg',
      'https://images.unsplash.com/photo-1529511696370-b8554caa7261?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80',
      require('./assets/splash.png'),
    ]);
    const fonts = cacheFont([Ionicons.font]);
    return Promise.all([...images, ...fonts]);
  };

  const onFinish = () => {
    setIsReady(true);
  };

  return isReady ? (
    <>
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
      <StatusBar barStyle="light-content" />
    </>
  ) : (
    <AppLoading
      startAsync={loadAssets}
      onFinish={onFinish}
      onError={console.error}
    />
  );
}
