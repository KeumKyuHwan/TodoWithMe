import React from 'react';
import styled from 'styled-components/native';
import { Modal, View, ScrollView, useWindowDimensions } from 'react-native';
import ModalComp from "./ModalComp";

const numColumns = 5;

const ColorGrid = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const ColorBox = styled.Pressable`
  width: ${({ boxSize }) => boxSize * 0.7}px;
  background-color: ${({ color }) => color};
  border-radius: 5px;
  margin: 10px;
  aspect-ratio: 1;

  ${({ isSelected }) => isSelected && `
    border: 2px solid #f2f2f2;
  `}
`;

const ColorSelector = ({ selectedColor, setSelectedColor, handleCloseModal, isVisible, setIsVisible, colorOption }) => {
  const { width } = useWindowDimensions();
  const boxSize = width / numColumns;

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    setIsVisible(false);
  };

  return (
    <ModalComp modalVisible={isVisible} setModalVisible={setIsVisible}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
              <ColorGrid>
                {colorOption.map((item, index) => (
                  <ColorBox
                    key={index}
                    color={item}
                    onPress={() => handleColorSelect(item)}
                    isSelected={selectedColor === item}
                    boxSize={boxSize}
                  />
                ))}
              </ColorGrid>
          </ScrollView>
      </View>
    </ModalComp>
  );
};

export default ColorSelector;