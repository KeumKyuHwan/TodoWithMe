import React from 'react';
import styled from 'styled-components/native';
import {remToPx} from "../utils/Converter";

// 버튼 크기 (circle 크기와 fontSize)
const getSize = (size) => {
  const sizes = {
    xsmall: { circle: 1.8, fontSize: 1.3 },
    small: { circle: 2.3, fontSize: 1.7 },
    medium: { circle: 2.8, fontSize: 2.2 },
    large: { circle: 4, fontSize: 3 },
    xlarge: { circle: 5, fontSize: 3.8 },
    default: { circle: 3, fontSize: 2.3 },
  };
  return sizes[size] || sizes.default ;
};

const AddButtonContainer = styled.Pressable`
  width: ${({ size }) => remToPx(getSize(size).circle)}px;
  height: ${({ size }) => remToPx(getSize(size).circle)}px;
  background-color: ${({ color }) => color || '#000000'};
  border-radius: 50%;
  justify-content: center;
  align-items: center;
`;

const AddButtonText = styled.Text`
  color: #ffffff;
  font-size: ${({ size }) => remToPx(getSize(size).fontSize)}px;
  font-weight: bold;
  include-font-padding: false;
`;

const AddButton = ({ onPress, size, color }) => {
  return (
    <AddButtonContainer size={size} onPress={onPress} color={color}>
      <AddButtonText size={size}>
        +
      </AddButtonText>
    </AddButtonContainer>
  );
};

export default AddButton;


// 예시
//      <AddButton
//      size="small"
//      color="#f2f2f2"
//      onPress={() => alert("ㅎㅇ")}/>