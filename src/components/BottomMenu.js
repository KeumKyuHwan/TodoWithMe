import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TextStyle from "./TextStyle";

const Container = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #FAFAFA;
  border-top-width: 2px;
  border-top-color: #CFCFCF;
`;

const MenuItem = styled.TouchableOpacity`
  padding: 10px;
`;

const BottomMenu = ({ menus = [], selectedMenu = menus[0], setSelectedMenu, isTabletDevice = false }) => {
  const navigation = useNavigation();

  const handleMenuPress = (menu) => {
    setSelectedMenu(menu);
    navigation.navigate(menu.src);
  };

  return (
    <Container isTabletDevice={isTabletDevice}>
      {menus.map((menu, index) => (
        <MenuItem key={index} onPress={() => handleMenuPress(menu)}>
          <TextStyle
            color={selectedMenu.name === menu.name ? "black" : "darkgray"}
            text={menu.name}
            size={isTabletDevice ? "large" : "xsmall"}
            weight="bold"
          />
        </MenuItem>
      ))}
    </Container>
  );
};

export default BottomMenu;