// CustomDropdown.js
import React, { useState, useRef } from 'react';
import { FlatList, Text, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components/native';

const Dropdown = ({ options, onSelect, placeholder = '선택하세요' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState(placeholder);

  // DropdownContainer에 대한 ref 생성
  const dropdownRef = useRef(null);

  const handleSelect = (item) => {
    setSelectedLabel(item.label);
    setIsVisible(false);
    onSelect(item.value);
  };

  return (
      <DropdownContainer ref={dropdownRef}>
        <DropdownHeader onPress={() => setIsVisible(!isVisible)}>
          <DropdownHeaderText>
            {selectedLabel || placeholder}
          </DropdownHeaderText>
          <Triangle isVisible={isVisible} />
        </DropdownHeader>

        {isVisible && (
          <DropdownListContainer>
            <DropdownList
              data={options}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <DropdownItem onPress={() => handleSelect(item)}>
                  <DropdownItemText>{item.label}</DropdownItemText>
                </DropdownItem>
              )}
            />
          </DropdownListContainer>
        )}
      </DropdownContainer>
  );
};

// styled-components
const DropdownContainer = styled.View`
  width: 100%;
  position: relative; /* 기준점 고정 */
`;

const DropdownHeader = styled.TouchableOpacity`
  padding: 10px;
  padding-right: 30px;
  border-bottom-width: 1px;
  border-color: #ccc;
  border-radius: 5px;
  background-color: #fff;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const DropdownHeaderText = styled.Text`
  font-size: 16px;
  color: #000;
`;

/* ▲ 모양을 만드는 삼각형 */
const Triangle = styled.View`
  width: 0;
  height: 0;
  border-left-width: 5px;
  border-right-width: 5px;
  border-top-width: 5px;
  border-left-color: transparent;
  border-right-color: transparent;
  border-top-color: #999;
  margin-left: 10px;

  /* 드롭다운 열림/닫힘에 따라 회전 */
  transform: ${({ isVisible }) => (isVisible ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

/* DropdownListContainer를 position: absolute로 수정 */
const DropdownListContainer = styled.View`
  position: absolute;
  top: 100%; /* DropdownHeader 바로 아래에 위치 */
  left: 0;
  width: 100%;
  z-index: 10;
  background-color: #fff;
  border-width: 1px;
  border-color: #ccc;
  border-top-width: 0;
  border-radius: 5px;
  max-height: 200px;
`;

const DropdownList = styled(FlatList)`
  width: 100%;
`;

const DropdownItem = styled.TouchableOpacity`
  padding: 10px;
  border-bottom-width: 1px;
  border-bottom-color: #f0f0f0;
`;

const DropdownItemText = styled.Text`
  font-size: 16px;
  color: #000;
`;

export default Dropdown;
