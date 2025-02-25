import React, {useState} from "react";
import { Pressable, View, Dimensions, useWindowDimensions } from "react-native";
import styled from "styled-components/native";
import TextStyle from "./TextStyle";
import ModalComp from "./ModalComp";
import {Checkbox} from "react-native-paper";


const BoxContainer = styled(View)`
flex: 1;
display: flex;
align-items: center;
justify-content: center;
`

const Box = styled(Pressable)`
  display: flex;
  justify-content: center;
  padding-left: 15px;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background-color: ${(props) => props.bgColor || 'lightgray'}; 
  border-radius : 15px;


`;

function InfoBox({bgColor, onPress}){
    const [modalVisible, setModalVisible] = useState(false);
    const { width, height } = useWindowDimensions(); 

    return(
        <BoxContainer>
        <Box 
        bgColor={bgColor}
        width = {width*0.9}
        height = {height*0.08} 
        onPress={() => setModalVisible(true)}>

           <TextStyle text="test" weight="bold" size="xsmall"
           adjustsFontSizeToFit={true}
           minimumFontScale={0.5}/>

        </Box>

        <ModalComp setModalVisible={setModalVisible} modalVisible={modalVisible} />
        </BoxContainer>
        )
}

export default InfoBox;