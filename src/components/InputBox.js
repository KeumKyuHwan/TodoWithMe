import React, { useState } from "react";
import { TextInput, useWindowDimensions, View } from "react-native";
import styled from "styled-components/native";
import { remToPx } from "../utils/Converter";

const Container = styled(View)`

display: flex;
align-items: center;

`;

const InputTitle = styled(TextInput)`
width : ${({width}) => width}px;
height : ${({height}) => height}px;
font-size : ${remToPx(0.5)}px;
`;

function InputBox ({placeholder}) {

    const {width, height} = useWindowDimensions();
    const [text, setText] = useState("");

    const onChangeText = (newText) => {
        setText(newText);
    }

    return (
        <Container >

        <InputTitle
        width = {width*0.9}
        height = {height*0.05}
        placeholder="test"
        value ={text}
        onChangeText={onChangeText}
        />

        </Container>
    )
}

export default InputBox;