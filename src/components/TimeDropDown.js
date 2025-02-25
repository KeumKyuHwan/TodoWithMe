import React, { useState } from 'react';
import { View, Text } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import styled from 'styled-components/native';

const TimeWrapper = styled(View)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const TimeDropDown = () => {
  const [openTime, setOpenTime] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);

  const times = [];

  // 시간과 분 합치기 (10분 단위로)
  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 10) {
      times.push({
        label: `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`,
        value: `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`,
      });
    }
  }

  return (
    <View style={{ padding: 20 }}>
      <TimeWrapper>
        <DropDownPicker
          open={openTime}
          value={selectedTime}
          items={times}
          setOpen={setOpenTime}
          setValue={setSelectedTime}
          placeholder="시간 선택"
        />
      </TimeWrapper>
    </View>
  );
};

export default TimeDropDown;
