import React from 'react';
import styled from 'styled-components/native';
import { Modal, TouchableWithoutFeedback, View, ScrollView, useWindowDimensions } from 'react-native';

const numColumns = 5;

const ModalContainer = styled.View`
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.9);
  flex: 1;
  width: 100%;
`;

const ColorCenter = styled.View`
  width: ${({ width }) => width * 0.8}px;
`;

const ColorGrid = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const ColorBox = styled.TouchableOpacity`
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
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={handleCloseModal}
    >
      <TouchableWithoutFeedback onPress={handleCloseModal}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ModalContainer>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
              <ColorCenter width={width}>
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
              </ColorCenter>
            </ScrollView>
          </ModalContainer>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ColorSelector;
