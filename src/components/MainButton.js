import React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';
import { remToPx } from "../utils/Converter";

// 버튼
const StyledButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: ${props => props.bgColor || "#000000"};
  padding: 5px;
`;

// 텍스트
const StyledText = styled.Text`
  color: ${props => props.txtColor || "#ffffff"};
  font-size: ${(props) => {
    switch (props.size) {
        case 'xsmall':
            return `${remToPx(0.3)}px`;
        case 'small' :
            return `${remToPx(0.5)}px`;
        case 'medium' :
            return `${remToPx(0.7)}px`;
        case 'large' :
            return `${remToPx(1.25)}px`;
        case 'xlarge' :
            return `${remToPx(1.75)}px`;
        default :
            return `${remToPx(1)}px`;
    }
  }};
`;

const MainButton = ({ title, size, bgColor, txtColor, handleClick }) => (
  <StyledButton onPress={handleClick} size={size} bgColor={bgColor}>
    <StyledText size={size} txtColor={txtColor}>
      {title}
    </StyledText>
  </StyledButton>
);

export default MainButton;


// 사용법
//    <MainButton
//    title="확인"
//    handleClick={() => alert("안녕")}
//    bgColor="black"
//    txtColor="white"
//    size="small"/>
