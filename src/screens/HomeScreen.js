import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import TimeDropDown from "../components/TimeDropDown";

const HomeScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);

  const [isVisible2, setIsVisible2] = useState(false);
  const [selectedTime2, setSelectedTime2] = useState(null); // 모달2를 위한 별도 상태 추가

  return (
    <View>
      <Text>홈</Text>

      {/* 모달1 */}
      <Pressable
        onPress={() => {
          setIsVisible(true);
          setIsVisible2(false); // 다른 모달 닫기
        }}
      >
        <Text>모달</Text>
      </Pressable>
      {isVisible && (
        <TimeDropDown
          type="time"
          setIsVisible={setIsVisible}
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
          title="근무 시간"
        />
      )}
   <Text>{selectedTime ? selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : "선택된 시간이 없습니다."}</Text>
      {/* 모달2 */}
      <Pressable
        onPress={() => {
          setIsVisible2(true);
          setIsVisible(false); // 다른 모달 닫기
        }}
      >
        <Text>모달2</Text>
      </Pressable>
      {isVisible2 && (
        <TimeDropDown
          type="date"
          setIsVisible={setIsVisible2}
          selectedTime={selectedTime2}
          setSelectedTime={setSelectedTime2}
          title="급여 날짜" // 모달2의 시간 독립적으로 관리
        />
      )}
    </View>
  );
};

export default HomeScreen;