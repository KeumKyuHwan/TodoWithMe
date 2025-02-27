import React, { useState } from 'react';
import { View, Text, TouchableOpacity,ScrollView } from 'react-native';
import styled from 'styled-components/native';
import TextStyle from '../components/TextStyle';
import MultiIconButton from '../components/MultiIconButton';
import Line from '../components/Line';
import Dropdown from '../components/Dropdown';
import MoneyInput from '../components/MoneyInput';
import DatePickerModal from '../components/DatePickerModal';
import Box from '../components/Box';

const WorkRegistrationScreen = () => {
  // 날짜 및 시간 상태 관리
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  // 모달 상태 관리
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [isStartTimePickerVisible, setIsStartTimePickerVisible] = useState(false);
  const [isEndTimePickerVisible, setIsEndTimePickerVisible] = useState(false);

  // Dropdown 상태 관리
  const [selectedValue, setSelectedValue] = useState('');

  // DatePicker 이벤트 핸들러
  const handleDateConfirm = (date) => {
    setSelectedDate(date);
    setIsDatePickerVisible(false);
  };

  const handleStartTimeConfirm = (date) => {
    setStartTime(date);
    setIsStartTimePickerVisible(false);
  };

  const handleEndTimeConfirm = (date) => {
    setEndTime(date);
    setIsEndTimePickerVisible(false);
  };

  return (

    <Container>
      {/* 상단 바 */}
      <Header>
        <MultiIconButton icon="close" />
        <TextStyle text="근무 등록" weight="bold" size="xsmall" />
        <MultiIconButton icon="check" />
      </Header>
      <Line />
     < ScrollView>

      {/* 급여 */}
      <TextStyle text="급여" size="tiny" />
      <Dropdown
        type="pay"
        placeholder="선택"
        onSelect={(value) => setSelectedValue(value)}
      />
      <MoneyInput />

      {/* 근무 날짜 */}
      <TextStyle text="근무 날짜" size="tiny" />
      <TouchableOpacity onPress={() => setIsDatePickerVisible(true)}>
        <DateText>
          {selectedDate.toLocaleDateString('ko-KR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            weekday: 'long'
          })}
        </DateText>
      </TouchableOpacity>

      <DatePickerModal
        mode="date"
        isVisible={isDatePickerVisible}
        onConfirm={handleDateConfirm}
        onCancel={() => setIsDatePickerVisible(false)}
      />

      {/* 근무 시간 */}
      <TextStyle text="근무 시간" size="tiny" />
      <TimeContainer>
        <TouchableOpacity onPress={() => setIsStartTimePickerVisible(true)}>
          <TimeText>
            {startTime ? startTime.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' }) : '시작 시간'}
          </TimeText>
        </TouchableOpacity>
        <DashText> - </DashText>
        <TouchableOpacity onPress={() => setIsEndTimePickerVisible(true)}>
          <TimeText>
            {endTime ? endTime.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' }) : '종료 시간'}
          </TimeText>
        </TouchableOpacity>
      </TimeContainer>

      <DatePickerModal
        mode="time"
        isVisible={isStartTimePickerVisible}
        onConfirm={handleStartTimeConfirm}
        onCancel={() => setIsStartTimePickerVisible(false)}
      />

      <DatePickerModal
        mode="time"
        isVisible={isEndTimePickerVisible}
        onConfirm={handleEndTimeConfirm}
        onCancel={() => setIsEndTimePickerVisible(false)}
      />

      <Line />

      {/* 메모 */}
      <TextStyle text="메모" size="tiny" />
      <Box />

      {/* 등록 버튼 */}
      <SubmitButton>
        <SubmitButtonText>등록</SubmitButtonText>
      </SubmitButton>
    </ScrollView>
    </Container>

  );
};

// styled-components
const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: #fff;
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const DateText = styled.Text`
  font-size: 16px;
  padding-vertical: 10px;
  color: #000;
  text-align : center;
`;

const TimeContainer = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const TimeText = styled.Text`
  font-size: 16px;
  color: #000;
  padding-vertical: 10px;
`;

const DashText = styled.Text`
  font-size: 16px;
  color: #000;
`;

const SubmitButton = styled.TouchableOpacity`
  background-color: #000;
  padding-vertical: 15px;
  border-radius: 5px;
  align-items: center;
  margin-top: 20px;
`;

const SubmitButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export default WorkRegistrationScreen;
