import React from 'react';
import styled from 'styled-components/native';
import {remToPx} from "../utils/Converter";

// 버튼 크기
const getSize = (size) => {
    const sizes = {
      xsmall: { width: 1.0, height: 0.5, fontSize: 0.2 },
      small: { width: 1.2, height: 0.6, fontSize: 0.3 },
      medium: { width: 1.4, height: 0.7, fontSize: 0.4 },
      large: { width: 1.8, height: 0.9, fontSize: 0.6 },
      xlarge: { width: 2.0, height: 1.0, fontSize: 0.7 },
      default: { width: 1.6, height: 0.8, fontSize: 0.5 },
    };
    return sizes[size] || sizes.default ;
  };



const Container = styled.Pressable`
  width: ${({ size }) => remToPx(getSize(size).width)}px;
  height: ${({ size }) => remToPx(getSize(size).height)}px;
  background-color: ${({ bgColor }) => bgColor || '#000000'};
  border-radius: 15px;
  justify-content: center;
  align-items: center;
`;

const StyledText = styled.Text`
  color: #ffffff;
  font-size: ${({ size }) => remToPx(getSize(size).fontSize)}px;
  font-weight: bold;
  include-font-padding: false;
  line-height: ${({ size }) => remToPx(getSize(size).fontSize) * 1.1}px;
`;

const ColorButton = ({handlePress, bgColor, size, children}) => {
    return (
        <Container onPress={handlePress} bgColor={bgColor} size={size}>
            <StyledText size={size}>
                {children}
            </StyledText>
        </Container>
    );
};

export default ColorButton;