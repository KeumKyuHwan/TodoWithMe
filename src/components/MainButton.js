import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const MainButton = () => (
  <View style={styles.container}>
    <Button title="컴포넌트 버튼" onPress={() => alert('버튼 클릭!')} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MainButton;