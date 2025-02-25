import React, { useState } from 'react';
import { View } from 'react-native';
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

  const options = [];

  // 시간과 분을 함께 조합하여 항목 생성 (예: 10:00, 10:10, 10:20)
  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 10) {
      options.push({
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
          items={options}
          setOpen={setOpenTime}
          setValue={setSelectedTime}
          placeholder="시간/분 선택"
        />
      </TimeWrapper>

    </View>
  );
};

export default TimeDropDown;
