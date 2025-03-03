import React, { useState } from "react";
import styled from "styled-components/native";
import TextStyle from "./TextStyle";
import { Pressable, useWindowDimensions, View } from "react-native";
import dayjs from "dayjs";
import Ionicons from 'react-native-vector-icons/Ionicons';

    const Container = styled(View)`
        flex-direction : row;
        align-items: center;
        justify-content: space-around;
        width: ${({width}) => width}px;
        height:  ${({height}) => height}px;
        background-color: rgb(255,255,255);
        
    `;

function DateList() {

    const {width, height} = useWindowDimensions();
    const isLandscape = width < height;

    const [selectedDate, setSelectedDate] = useState(dayjs().format("YYYY-MM-DD"));

    const changeDate = (days) => {
        setSelectedDate((prevDate) =>
            dayjs(prevDate, "YYYY년 MM월 DD일")
                .add(days, "day")
                .format("YYYY-MM-DD")
        )
    }
  
    const now = dayjs();

    return(

    <Container
        width={width*1}
        height={isLandscape ? height*0.1 : height*0.15}
    >
        <Pressable onPress={() => changeDate(-1)}>
            <Ionicons name="chevron-back-outline" color="#000000" size={27}></Ionicons>
        </Pressable>
      <TextStyle 
      size="xsmall"
      weight="bold"
      text={dayjs(selectedDate).format("YYYY년 MM월 DD일")}></TextStyle>

<Pressable onPress={() => changeDate(1)}>
            <Ionicons name="chevron-forward-outline" color="#000000" size={27}></Ionicons>
        </Pressable>
    </Container>
    )
}

export default DateList;