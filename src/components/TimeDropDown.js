import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

const TimeDropDown = () => {
  const [openTime, setOpenTime] = useState(false);
  const [openMinute, setOpenMinute] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedMinute, setSelectedMinute] = useState(null);

  const hours = [];
  const minutes = [];
  
  for (let hour = 0; hour < 24; hour++) {
    hours.push({ label: `${String(hour).padStart(2, '0')}:00`, value: hour });
  }
  
  for (let minute = 0; minute < 60; minute += 10) {
    minutes.push({ label: `${String(minute).padStart(2, '0')}`, value: minute });
  }

  return (
    <div style={{ padding: 20 }}>
      {/* 시간 드롭다운 */}
      <DropDownPicker
        open={openTime}
        value={selectedTime}
        items={hours}
        setOpen={setOpenTime}
        setValue={setSelectedTime}
        placeholder="Select hour"
      />
      
      {/* 분 드롭다운 */}
      <DropDownPicker
        open={openMinute}
        value={selectedMinute}
        items={minutes}
        setOpen={setOpenMinute}
        setValue={setSelectedMinute}
        placeholder="Select minute"
      />

      {/* 선택된 시간과 분 */}
      <div>
        <p>
          Selected Time: {selectedTime !== null ? `${String(selectedTime).padStart(2, '0')}:${String(selectedMinute).padStart(2, '0')}` : 'None'}
        </p>
      </div>
    </div>
  );
}

export default TimeDropDown;