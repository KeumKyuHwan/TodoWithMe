import React from 'react';
import styled from 'styled-components/native';
import { View } from 'react-native';

const LineContainer = styled.View`
  width: 100%;
  height: ${(props) => props.height || '1px'};
  background-color: ${(props) => {
    switch (props.color) {
      case 'lightgray':
        return 'rgb(207, 207, 207)';
      case 'darkgray':
        return 'rgb(130, 130, 130)';
      case 'black':
        return 'rgb(0, 0, 0)';
      case 'white':
        return 'rgb(255, 255, 255)';
      default:
        return 'rgb(0, 0, 0)';
    }
  }};
`;

const Line = ({ color, height }) => {
  return <LineContainer color={color} height={height} />;
};

export default Line;