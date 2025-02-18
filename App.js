import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import HomeScreen from './src/screens/HomeScreen'; // HomeScreen 경로에 맞게 수정

const App = () => (
  <SafeAreaView style={styles.container}>
    <HomeScreen />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
