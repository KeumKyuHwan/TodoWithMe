import React from 'react';
import { View, Text } from 'react-native';
import DatePicker from 'react-native-date-picker';

const TimeDropDown = ({ type, setIsVisible, selectedTime, setSelectedTime, title }) => {
  return (
    <View>
      {/* 제목 표시 */}
      <Text>
        {title}
      </Text>

      <DatePicker
        modal
        open={true} // 항상 모달이 열려 있도록 설정
        date={selectedTime ?? new Date()}
        mode={type}
        locale="ko-KR"
        confirmText="확인"
        cancelText="취소"
        onConfirm={(selectedDate) => {
          setSelectedTime(selectedDate);
          setIsVisible(false); // 모달 닫기
        }}
        onCancel={() => setIsVisible(false)} // 취소 시 닫기
      />
    </View>
  );
};

export default TimeDropDown;