import React, { useState } from 'react';
import { View } from 'react-native';
import CalendarComp from "../components/CalendarComp";

// month : 0 (1월) ~ 11 (12월)
const CalendarScreen = ({ route }) => {
  const { isTabletDevice } = route.params;
  const [selected, setSelected] = useState('');
  const [events, setEvents] = useState([
    {
      title: '이벤트 1',
      start: new Date(2025, 1, 1, 9, 0),
      end: new Date(2025, 1, 1, 11, 0),
      bgColor: '#FF6347', // 배경색 추가
    },
    {
      title: '이벤트 2',
      start: new Date(2025, 1, 5, 13, 0),
      end: new Date(2025, 1, 5, 14, 0),
      bgColor: '#7CFC00', // 다른 배경색 추가
    },
  ]);
  return (
    <View style={{ flex: 1 }}>
      <CalendarComp 
      events={events} 
      selectedDate={selected} 
      setSelectedDate={setSelected}
      isTabletDevice={isTabletDevice}/>
    </View>
  );
};

export default CalendarScreen;