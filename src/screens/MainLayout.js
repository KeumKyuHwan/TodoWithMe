import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import CalendarScreen from "../screens/CalendarScreen";
import WorkplaceScreen from "../screens/WorkplaceScreen";
import DiaryScreen from "../screens/DiaryScreen";
import BottomMenu from '../components/BottomMenu';

const Stack = createNativeStackNavigator();

// 밑에 메뉴가 계속 유지되는 페이지
// 홈 메인, 달력 메인, 근무일지 메인, 일기 메인

const MainLayout = () => {
    const menus = [
      { name: "홈", src: "HomeScreen" },
      { name: "달력", src: "CalendarScreen" },
      { name: "근무지", src: "WorkplaceScreen" },
      { name: "일기", src: "DiaryScreen"}
    ];
  const [selectedMenu, setSelectedMenu] = useState(menus[0]);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="CalendarScreen" component={CalendarScreen}/>
          <Stack.Screen name="WorkplaceScreen" component={WorkplaceScreen}/>
          <Stack.Screen name="DiaryScreen" component={DiaryScreen}/>
        </Stack.Navigator>
      </View>
      <BottomMenu menus={menus} selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
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
});

export default MainLayout;