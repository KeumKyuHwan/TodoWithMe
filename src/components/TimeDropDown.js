import React, { useState } from 'react';
import { View, Text, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import styled from 'styled-components/native';

const TimeWrapper = styled(View)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const TimeText = styled(Text)`
  font-weight: bold;
  margin-right: 10px;
`;

const TimeDropDown = () => {
  const [show, setShow] = useState(false); // 날짜/시간 선택창을 보여줄지 여부
  const [selectedTime, setSelectedTime] = useState(new Date()); // 선택된 시간

  const onChange = (event, selectedDate) => {
    setShow(false); // 선택 후 선택창을 닫음
    if (selectedDate) {
      setSelectedTime(selectedDate); // 선택된 시간을 상태에 저장
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TimeWrapper>
        <TimeText>근무 시간</TimeText>
        <Text
          onPress={() => setShow(true)}
        >
          {selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </Text>
      </TimeWrapper>

      {show && (
        <DateTimePicker
          value={selectedTime}
          mode="time" // 시간과 분만 선택
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default TimeDropDown;
