import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainLayout from './src/screens/MainLayout';

export default function App() {
  return (
    <NavigationContainer>
      <MainLayout />
    </NavigationContainer>
  );
}