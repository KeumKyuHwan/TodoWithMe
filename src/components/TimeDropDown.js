import React from 'react';
import { View } from 'react-native';
import DatePicker from 'react-native-date-picker';

const TimeDropDown = ({ type, setIsVisible, selectedTime, setSelectedTime }) => {
  return (
    <View>
      <DatePicker
        modal
        open={true} // 항상 모달이 열려 있도록 설정
        date={selectedTime ?? new Date()}
        mode={type}
        locale="ko-KR"
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