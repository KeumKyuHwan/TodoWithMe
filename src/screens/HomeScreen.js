import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MainButton from '../components/MainButton';

const HomeScreen = () => (
  <View style={styles.container}>
    <Text>Welcome to the Home Screen</Text>
    <Text>안녕하세요</Text>
    <MainButton/>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;