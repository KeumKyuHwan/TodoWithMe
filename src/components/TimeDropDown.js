import React, { useState } from 'react';
import { View, Text } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import styled from 'styled-components/native';

const TimeWrapper = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const TimeText = styled(Text)`
  font-size: 16px;
  font-weight: bold;
  margin-right: 10px;
`;

const TimeDropDown = () => {
  const [openTime, setOpenTime] = useState(false);
  const [openMinute, setOpenMinute] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedMinute, setSelectedMinute] = useState(null);

  const hours = [];
  const minutes = [];

  // 시간 항목 생성
  for (let hour = 0; hour < 24; hour++) {
    hours.push({ label: `${String(hour).padStart(2, '0')}`, value: hour });
  }

  // 분 항목 생성
  for (let minute = 0; minute < 60; minute += 10) {
    minutes.push({ label: `${String(minute).padStart(2, '0')}`, value: minute });
  }

  return (
    <View style={{ padding: 20 }}>
      <TimeWrapper>
        <TimeText>시간</TimeText>
        <DropDownPicker
          open={openTime}
          value={selectedTime}
          items={hours}
          setOpen={setOpenTime}
          setValue={setSelectedTime}
          placeholder="시간 선택"
          containerStyle={{ width: '45%' }}
        />
      </TimeWrapper>

      <TimeWrapper>
        <TimeText>분</TimeText>
        <DropDownPicker
          open={openMinute}
          value={selectedMinute}
          items={minutes}
          setOpen={setOpenMinute}
          setValue={setSelectedMinute}
          placeholder="분 선택"
          containerStyle={{ width: '45%' }}
        />
      </TimeWrapper>
    </View>
  );
};

export default TimeDropDown;
