import React, { useState } from 'react';
import { Modal, View, Text, Pressable } from 'react-native';
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

const TimeDropDown = ({ type, setIsVisible, selectedTime, setSelectedTime }) => {
  const [isModalVisible, setModalVisible] = useState(false); // 모달 상태

  const onChange = (event, selectedDate) => {
    if (selectedDate) {
      setSelectedTime(selectedDate); // 선택된 시간 저장
    }
    setModalVisible(false); // 모달 닫기
    setIsVisible && setIsVisible(false); // setIsVisible이 존재할 때만 실행
  };

  return (
    <View style={{ padding: 20 }}>
      {/* 모달 열기 버튼 */}
      <Pressable onPress={() => setModalVisible(true)}>
        <TimeWrapper>
          <TimeText>{selectedTime ? selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : "시간 선택"}</TimeText>
        </TimeWrapper>
      </Pressable>

      {/* 모달 창 */}
      <Modal
        visible={isModalVisible} // 'isVisible'이 아니라 'visible' 사용
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
            <DateTimePicker
              value={selectedTime ?? new Date()}
              mode={type}
              display="default"
              onChange={onChange}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default TimeDropDown;