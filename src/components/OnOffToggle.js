// OnOffToggle.js
import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Text, Dimensions } from 'react-native';

// 화면 너비 가져오기
const screenWidth = Dimensions.get('window').width;

const OnOffToggle = ({ initial = false, onToggle }) => {
  const [isOn, setIsOn] = useState(initial);

  // 토글 상태 전환 함수
  const toggleSwitch = () => {
    setIsOn(!isOn);
    onToggle && onToggle(!isOn);
  };

  return (
    <SwitchButton onPress={toggleSwitch} isOn={isOn}>
      <Circle isOn={isOn} />
      <StatusText isOn={isOn}>{isOn ? 'ON' : 'OFF'}</StatusText>
    </SwitchButton>
  );
};

const SwitchButton = styled.TouchableOpacity`
  width: ${screenWidth * 0.5}px;
  height: ${screenWidth * 0.15}px;
  border-radius: ${screenWidth * 0.075}px;
  background-color: ${({ isOn }) => (isOn ? '#000' : '#fff')};
  border: 2px solid #999;
  display: flex;
  flex-direction: ${({ isOn }) => (isOn ? 'row' : 'row-reverse')};
  align-items: center;
  justify-content: space-between;
  padding: ${screenWidth * 0.01}px ${screenWidth * 0.03}px;
  transition: all 0.3s ease;
`;

const Circle = styled.View`
  width: ${screenWidth * 0.1}px;
  height: ${screenWidth * 0.1}px;
  border-radius: ${screenWidth * 0.05}px;
  background-color: ${({ isOn }) => (isOn ? '#fff' : '#000')};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
`;

const StatusText = styled(Text)`
  color: ${({ isOn }) => (isOn ? '#fff' : '#000')};
  font-weight: bold;
  font-size: ${screenWidth * 0.05}px;
  text-align: center;
  transition: all 0.3s ease;
`;

export default OnOffToggle;
