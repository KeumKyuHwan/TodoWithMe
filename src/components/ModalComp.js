import React, { useState } from "react";
import { Modal, Pressable, View, Text, Dimensions } from "react-native";
import styled from "styled-components/native";

const { width, height } = Dimensions.get('window');

const Overlay = styled(Pressable)`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.50);
  align-items: center;
  justify-content: flex-end;
`;

const ModalContainer = styled(View)`
background-color: #ffffff ;
width: 93%;
height: 40%;
border-radius: 15px;


`;

function ModalComp({modalVisible, setModalVisible}){
    return(
        <Modal visible={modalVisible} animationType="slide">
            <Overlay onPress={() => setModalVisible(false)}>
                <ModalContainer>
                    <Text>만드는중</Text>

                </ModalContainer>
            </Overlay>
        </Modal>
    )
}
export default ModalComp;