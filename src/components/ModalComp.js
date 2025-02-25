import React, { useEffect, useState } from "react";
import { Modal, Pressable, View, Text, useWindowDimensions } from "react-native";
import styled from "styled-components/native";

const Overlay = styled(Pressable)`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.50);
  align-items: center;
  justify-content: flex-end;
`;

const ModalContainer = styled(View)`
align-items: center;
justify-content: center;

background-color: #ffffff ;
border-radius: 15px;
width: ${(props) => props.width}px;
height: ${(props) => props.height}px;


`;

function ModalComp({modalVisible, setModalVisible}){

    const {width, height} = useWindowDimensions();

    // 가로 모드
    const isLandscape = width > height;

    // useEffect(() => {
    //     width: width*0.9
    //     height: isLandscape ? height * 0.5 : height * 0.7, 600
    // }, [width, height])

    return(
        <Modal 
        visible={modalVisible} 
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
        >
            <Overlay onPress={() => setModalVisible(false)}>
                <ModalContainer
                width={width*0.9}
                height={isLandscape ? height * 0.7 : height * 0.5}
                >
                    <Text>만드는중</Text>

                </ModalContainer>
            </Overlay>
        </Modal>
    )
}
export default ModalComp;