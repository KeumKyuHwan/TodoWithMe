import React, { useState, useRef } from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import TextStyle from "./TextStyle";

const Dropdown = ({ type = 'default', onSelect, placeholder = '선택하세요', width = '100%' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState(placeholder);

  // type에 따라 options 설정
  const options = {
    default: [
      { label: '옵션 1', value: 'option1' },
      { label: '옵션 2', value: 'option2' },
      { label: '옵션 3', value: 'option3' },
    ],
    pay: [
      { label: '일급', value: 'Daily Pay' },
      { label: '주급', value: 'Weekly Pay' },
      { label: '월급', value: 'Monthly Pay' }
    ],

  };

  // type에 맞는 options 선택
  const resolvedOptions = options[type] || options.default;

  const dropdownRef = useRef(null);

  const handleSelect = (item) => {
    setSelectedLabel(item.label);
    setIsVisible(false);
    onSelect(item.value);
  };

  return (
    <DropdownContainer ref={dropdownRef} width={width}>
      <DropdownHeader onPress={() => setIsVisible(!isVisible)}>
        <TextStyle color="black" text={selectedLabel || placeholder} size="tiny"/>
        <Triangle isVisible={isVisible} />
      </DropdownHeader>

      {isVisible && (
        <DropdownListContainer width={width}>
          <DropdownList
            data={resolvedOptions}
            keyExtractor={(item) => item.value}
            renderItem={({ item }) => (
              <DropdownItem onPress={() => handleSelect(item)}>
                <TextStyle text={item.label} size="tiny"/>
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
  width: ${({ width }) => width};
  position: relative;
`;

const DropdownHeader = styled.TouchableOpacity`
  width: 100%;
  padding: 3%;
  padding-right: 10%;
  border-bottom-width: 1px;
  border-color: #ccc;
  border-radius: 5px;
  background-color: #fff;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Triangle = styled.View`
  width: 0;
  height: 0;
  border-left-width: 5px;
  border-right-width: 5px;
  border-top-width: 5px;
  border-left-color: transparent;
  border-right-color: transparent;
  border-top-color: #999;
  margin-left: 5%;
  transform: ${({ isVisible }) => (isVisible ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

const DropdownListContainer = styled.View`
  position: absolute;
  top: 100%;
  left: 0;
  width: ${({ width }) => width};
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
  padding: 3%;
  border-bottom-width: 1px;
  border-bottom-color: #f0f0f0;
`;

export default Dropdown;
