import React from 'react';
import InfoBox from './src/components/InfoBox';
import { View } from 'react-native';
import TodoCheck from './src/components/TodoCheck';
import InputBox from './src/components/InputBox';
import InputAdd from './src/components/InputAdd';
// import { NavigationContainer } from '@react-navigation/native';
// import MainLayout from './src/screens/MainLayout';

export default function App() {
  return (
    // <NavigationContainer>
    //   <MainLayout />
    // </NavigationContainer>

    <View>
    <InfoBox />
    <TodoCheck />
    <InputBox />
    <InputAdd />
    </View>
  );
}