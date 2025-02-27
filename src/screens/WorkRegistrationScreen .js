import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
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
    <View style={styles.container}>
      {/* 상단 바 */}
      <View style={styles.header}>
        <MultiIconButton icon="close" />
        <TextStyle text="근무 등록" weight="bold" size="xsmall" />
        <MultiIconButton icon="check" />
      </View>
      <Line />

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
        <Text style={styles.dateText}>
          {selectedDate.toLocaleDateString('ko-KR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            weekday: 'long'
          })}
        </Text>
      </TouchableOpacity>

      <DatePickerModal
        mode="date"
        isVisible={isDatePickerVisible}
        onConfirm={handleDateConfirm}
        onCancel={() => setIsDatePickerVisible(false)}
      />

      {/* 근무 시간 */}
      <TextStyle text="근무 시간" size="tiny" />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity onPress={() => setIsStartTimePickerVisible(true)}>
          <Text style={styles.timeText}>
            {startTime ? startTime.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' }) : '시작 시간'}
          </Text>
        </TouchableOpacity>
        <Text style={styles.dashText}> - </Text>
        <TouchableOpacity onPress={() => setIsEndTimePickerVisible(true)}>
          <Text style={styles.timeText}>
            {endTime ? endTime.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' }) : '종료 시간'}
          </Text>
        </TouchableOpacity>
      </View>

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
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>등록</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
  },
  dateText: {
    fontSize: 16,
    paddingVertical: 10,
    color: '#000'
  },
  timeText: {
    fontSize: 16,
    color: '#000',
    paddingVertical: 10
  },
  dashText: {
    fontSize: 16,
    color: '#000'
  },
  submitButton: {
    backgroundColor: '#000',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});

export default WorkRegistrationScreen;
