import React, { Component } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

class App extends Component {
  constructor(props) {
    super(props);

    // 시간과 10분 단위로 드롭다운 메뉴 항목 생성
    const items = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 10) {
        const time = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
        items.push({ label: time, value: time });
      }
    }

    this.state = {
      open: false,
      value: [],
      items: items,  // 시간과 10분 단위로 항목을 설정
    };

    this.setValue = this.setValue.bind(this);
  }

  setOpen(open) {
    this.setState({
      open,
    });
  }

  setValue(value) {
    this.setState({ value });
  }

  setItems(items) {
    this.setState({ items });
  }

  render() {
    const { open, value, items } = this.state;

    return (
      <DropDownPicker
        multiple={true}
        min={0}
        max={20}
        open={open}
        value={value}
        items={items}
        setOpen={(open) => this.setOpen(open)}
        setValue={(value) => this.setValue(value)}
        setItems={(items) => this.setItems(items)}
        placeholder="Select time"
      />
    );
  }
}

export default App;
