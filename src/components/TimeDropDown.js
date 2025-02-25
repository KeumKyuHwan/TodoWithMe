import React, { useState } from 'react';
import { View, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Modal from 'react-native-modal';  // 모달을 사용하기 위한 import
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
  const [isModalVisible, setModalVisible] = useState(false); // 모달 창 상태

  const onChange = (event, selectedDate) => {
    if (selectedDate) {
      setSelectedTime(selectedDate); // 선택된 시간을 상태에 저장
    }
    setModalVisible(false); // 모달 창 닫기
  };

  return (
    <View style={{ padding: 20 }}>
      <TimeWrapper>
        <TimeText>근무 시간</TimeText>
        <Text
          onPress={() => setModalVisible(true)} // 클릭 시 모달 창 열기
        >
          {selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </Text>
      </TimeWrapper>

      {/* 모달 창 */}
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)} // 배경 클릭 시 모달 닫기
      >
        <View style={{ backgroundColor: 'white', padding: 20 }}>
          <DateTimePicker
            value={selectedTime}
            mode="time" // 시간과 분만 선택
            display="default"
            onChange={onChange}
          />
        </View>
      </Modal>
    </View>
  );
};

export default TimeDropDown;
