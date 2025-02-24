// OnOffToggle.js
import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Text, useWindowDimensions } from 'react-native';

const OnOffToggle = ({ initial = false, onToggle }) => {
  const [isOn, setIsOn] = useState(initial);

  // 가로/ 세로 감지지
  const {height, width} = useWindowDimensions();
  const isPortrait = height > width;

    //가로/세로 모드에 따라 크기 조절
    const buttonWidth = isPortrait ? width * 0.3 : width * 0.1;
    const buttonHeight = isPortrait ? height * 0.05 : height * 0.08;
    const circleSize = buttonHeight - 6;
    const fontSize = isPortrait ? width * 0.03 : width * 0.02;

  // 토글 상태 전환 함수
  const toggleSwitch = () => {
    setIsOn(!isOn);
    onToggle && onToggle(!isOn);
  };

  return (
    <SwitchButton 
    onPress={toggleSwitch} 
    isOn={isOn}
    buttonWidth={buttonWidth} 
    buttonHeight={buttonHeight}
      >
      <Circle isOn={isOn} circleSize={circleSize} />
      <ToggleText 
      isOn={isOn}
      fontSize={fontSize}
      >{isOn ? 'on' : 'off'}</ToggleText>
    </SwitchButton>
  );
};

const SwitchButton = styled.TouchableOpacity`
  width: ${({ buttonWidth }) => buttonWidth}px;
  height: ${({ buttonHeight }) => buttonHeight}px;
   border-radius: ${({ buttonHeight }) => buttonHeight / 2}px;
  background-color: ${({ isOn }) => (isOn ? '#000' : '#fff')};
  border: 1px solid #000;
  flex-direction: ${({ isOn }) => (isOn ? 'row-reverse' : 'row')};
  align-items : center;
  padding: 2px;
  justify-content: space-between; /* 요소를 양 끝으로 정렬 */
`;

const Circle = styled.View`
  width: ${({ circleSize }) => circleSize}px;
  height: ${({ circleSize }) => circleSize}px;
  border-radius: ${({ circleSize }) => circleSize / 2}px;
  background-color: ${({ isOn }) => (isOn ? '#fff' : '#000')};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  transition: all 0.3s;
`;

const ToggleText = styled(Text)`
  color: ${({ isOn }) => (isOn ? '#fff' : '#000')};
  font-weight: bold;
  margin: 0 4px;
  font-size: ${({ fontSize }) => fontSize}px;
`;

export default OnOffToggle;
