import React from 'react';
import { View, Text } from 'react-native';
import styled from "styled-components/native";
import TextStyle from '../components/TextStyle';
import MultiIconButton from '../components/MultiIconButton';
import Line from '../components/Line';


const WorkRegistrationScreen = ()=>{

    return(
        <View>
            <MultiIconButton icon="close"/>
       <TextStyle text="근무등록" weight="bold" size="small"/>
       <MultiIconButton icon="check"/>
       <Line/>
       </View>
    )
}

export default WorkRegistrationScreen;