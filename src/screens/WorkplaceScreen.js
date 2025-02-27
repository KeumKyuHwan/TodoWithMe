import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Line from '../components/Line';
import styled from 'styled-components';
import TextStyle from '../components/TextStyle';

const WorkplaceScreen = () => (
    <View style={styles.container}>
        <TextStyle text="근무 현황" color="black" size="xxsmall" weight="bold"/>
        <Line color="lightgray"></Line>
    </View>
);

export default WorkplaceScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: "#fff",
    },
  });

