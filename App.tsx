import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { 
  useFonts, 
  Nunito_600SemiBold, 
  Nunito_700Bold, 
  Nunito_800ExtraBold
} from '@expo-google-fonts/nunito';

import AppStack from './src/routes/AppStack';
export default function App() {
  let [fontsLoaded] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
  });

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <>
        <StatusBar backgroundColor="transparent"/>
        <AppStack />
      </>
    );
  }
};
