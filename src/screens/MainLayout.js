import React, { useState } from 'react';
import { View, StyleSheet, useWindowDimensions } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import CalendarScreen from "../screens/CalendarScreen";
import WorkplaceScreen from "../screens/WorkplaceScreen";
import DiaryScreen from "../screens/DiaryScreen";
import BottomMenu from '../components/BottomMenu';
import { isTablet } from "../utils/DeviceUtil";

const Stack = createNativeStackNavigator();

// 밑에 메뉴가 계속 유지되는 페이지
// 홈 메인, 달력 메인, 근무일지 메인, 일기 메인
const MainLayout = () => {
  // 현재 Device 크기
  const { width, height } = useWindowDimensions();

  // Table 여부 확인
  const isTabletDevice = isTablet(width, height);

  // 메뉴
  const menus = [
    { name: "홈", src: "HomeScreen" },
    { name: "달력", src: "CalendarScreen" },
    { name: "근무지", src: "WorkplaceScreen" },
    { name: "일기", src: "DiaryScreen" }
  ];

  // 선택한 메뉴 상태관리
  const [selectedMenu, setSelectedMenu] = useState(menus[0]);

  // 동적 bottomMenuHeight 계산
  const bottomMenuHeight = isTabletDevice ? height * 0.16 : (height > 600 ? height * 0.12 : height * 0.2);

  // content 영역이 bottomMenu와 겹치지 않도록 marginBottom 적용
  const contentMarginBottom = bottomMenuHeight;

  // initialParams로 MainLayout에서 하위 컴포넌트로 정보 전달 가능
  const initialParams = {width, height, isTabletDevice}

  return (
    <View style={styles.container}>
      <View style={[styles.content, { marginBottom: contentMarginBottom }]}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="HomeScreen" component={HomeScreen} initialParams={initialParams}/>
          <Stack.Screen name="CalendarScreen" component={CalendarScreen} initialParams={initialParams}/>
          <Stack.Screen name="WorkplaceScreen" component={WorkplaceScreen} initialParams={initialParams}/>
          <Stack.Screen name="DiaryScreen" component={DiaryScreen} initialParams={initialParams}/>
        </Stack.Navigator>
      </View>
      <View style={[styles.bottomMenuContainer, { height: bottomMenuHeight }]}>
        <BottomMenu
          menus={menus}
          selectedMenu={selectedMenu}
          setSelectedMenu={setSelectedMenu}
          isTabletDevice={isTabletDevice}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  bottomMenuContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0
  },
});

export default MainLayout;