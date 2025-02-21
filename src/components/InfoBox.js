import React, {useState} from "react";
import { TouchableOpacity, View, Dimensions } from "react-native";
import styled from "styled-components/native";
import TextStyle from "./TextStyle";
import ModalComp from "./ModalComp";

const { width, height } = Dimensions.get('window');

const BoxContainer = styled(View)`
display: flex;
align-items: center;
`

const Box = styled(TouchableOpacity)`
  display: flex;
  justify-content: center;
  paddingLeft: 15px;
  width: ${(props) => props.width || width * 0.9};
  height: ${(props => props.height || height * 0.08)};
  background-color: ${(props) => props.bgColor || 'lightgray'}; 
  border-radius : 15px;


`;

function InfoBox({bgColor, onPress}){
    const [modalVisible, setModalVisible] = useState(false);

    return(
        <BoxContainer>
        <Box bgColor={bgColor} onPress={() => setModalVisible(true)}>
           <TextStyle text="test" weight="bold" size="xsmall" />
        </Box>
        <ModalComp setModalVisible={setModalVisible} modalVisible={modalVisible} />
        </BoxContainer>    )
}

export default InfoBox;