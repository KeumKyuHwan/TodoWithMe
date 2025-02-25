import React, { useState } from "react";
import { TextInput, View } from "react-native";
import styled from "styled-components/native";
import { remToPx } from "../utils/Converter";

const Container = styled(View)`
display: flex;
align-items: center;
`

const AddBox = styled(TextInput)`
width: ${({width}) => width}%;
height: ${remToPx(1)}px;
border: 1px solid black;
font-size: ${remToPx(0.3)}px;
` 


function InputAdd({width}) {

    const [text, setText] = useState("");

    const onChangeText = (newText) => {
        setText(newText);
ㄴ    }

    return(
     <Container>

        <AddBox
        width = {width} 
        value ={text}
        onChangeText={onChangeText}
        />

     </Container>       
    )
}

export default InputAdd;