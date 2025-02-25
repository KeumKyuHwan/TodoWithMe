import React, { Component } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

class App extends Component {
  constructor(props) {
    super(props);

    // 시간과 10분 단위로 드롭다운 메뉴 항목 생성
    const hours = [];
    const minutes = [];
    for (let hour = 0; hour < 24; hour++) {
      hours.push({ label: `${String(hour).padStart(2, '0')}:00`, value: hour });
    }
    for (let minute = 0; minute < 60; minute += 10) {
      minutes.push({ label: `${String(minute).padStart(2, '0')}`, value: minute });
    }

    this.state = {
      openTime: false,
      openMinute: false,
      selectedTime: null,
      selectedMinute: null,
      itemsTime: hours,  // 시간 항목
      itemsMinute: minutes,  // 분 항목
    };

    this.setValue = this.setValue.bind(this);
  }

  setOpen(openTime, openMinute) {
    this.setState({
      openTime,
      openMinute,
    });
  }

  setValue(type, value) {
    if (type === 'time') {
      this.setState({ selectedTime: value });
    } else if (type === 'minute') {
      this.setState({ selectedMinute: value });
    }
  }

  render() {
    const { openTime, openMinute, selectedTime, selectedMinute, itemsTime, itemsMinute } = this.state;

    return (
      <div style={{ padding: 20 }}>
        {/* 시간 드롭다운 */}
        <DropDownPicker
          open={openTime}
          value={selectedTime}
          items={itemsTime}
          setOpen={(open) => this.setOpen(open, openMinute)}
          setValue={(value) => this.setValue('time', value)}
          setItems={(items) => this.setState({ itemsTime: items })}
          placeholder="Select hour"
        />
        
        {/* 분 드롭다운 */}
        <DropDownPicker
          open={openMinute}
          value={selectedMinute}
          items={itemsMinute}
          setOpen={(open) => this.setOpen(openTime, open)}
          setValue={(value) => this.setValue('minute', value)}
          setItems={(items) => this.setState({ itemsMinute: items })}
          placeholder="Select minute"
        />

        {/* 선택된 시간과 분 */}
        <div>
          <p>Selected Time: {selectedTime !== null ? `${String(selectedTime).padStart(2, '0')}:${String(selectedMinute).padStart(2, '0')}` : 'None'}</p>
        </div>
      </div>
    );
  }
}

export default App;
