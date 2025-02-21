import React from "react";
import styled from "styled-components/native";
import { Text } from "react-native";


const Font = styled(Text)`
color : ${(props) => props.color || 'rgb(0,0,0)'};

`

export const InfoFont = ({text, color}) => {
    return <Font color={color}>{text}</Font>
};

// 밑에 사용하는 폰트 만들어서 사용할 것
