import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Button = () => (
  <View style={styles.container}>
    <Button>컴포넌트 버튼</Button>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Button;