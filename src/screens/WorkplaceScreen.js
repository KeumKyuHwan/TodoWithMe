import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Line from "../components/Line";
import TextStyle from "../components/TextStyle";

const WorkplaceScreen = ({ route }) => {
  const { width, isTabletDevice } = route.params; // 디바이스 크기 정보 가져오기

  // 폰과 태블릿에 맞는 스타일 정의
  const textSize = isTabletDevice ? "large" : "xxsmall";  // 태블릿은 'large', 폰은 'xxsmall' 크기
  const containerPadding = isTabletDevice ? 40 : 20; // 태블릿은 패딩을 더 크게

  return (
    <View style={[styles.container, { padding: containerPadding}]}>

      <TextStyle text="근무 현황" color="black" size={textSize} weight="bold" textAlign="center" />

      <Line color="lightgray" />
    </View>
  );
};

export default WorkplaceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
