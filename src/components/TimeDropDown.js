import React from 'react';
import { View } from 'react-native';
import DatePicker from 'react-native-date-picker';

const TimeDropDown = ({ type, isVisible, setIsVisible, selectedTime, setSelectedTime, title }) => {
  return (
    <View>
      <DatePicker
        modal
        open={isVisible}
        date={selectedTime ?? new Date()}
        mode={type}
        locale="ko-KR"
        onConfirm={(selectedDate) => {
          setSelectedTime(selectedDate);
          setIsVisible(false); // 모달 닫기
        }}
        onCancel={() => setIsVisible(false)} // 취소 시 닫기
        title={title}
        confirmText="확인"
        cancelText="취소"
      />
    </View>
  );
};

export default TimeDropDown;

// 사용예제
//
//  <TimeDropDown
//      type="time"  (time, date, datetime 중 택 1)
//      isVisible={isVisible}
//      setIsVisible={setIsVisible}
//      selectedTime={selectedTime}
//      setSelectedTime={setSelectedTime}
//      title="시간선택"
//  />