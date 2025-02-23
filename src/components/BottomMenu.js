import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity, useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TextStyle from "./TextStyle";
import {isTablet} from "../utils/DeviceUtil";

const Container = styled.View`
  width: 100%;
  height: ${({ height, isTabletDevice }) => isTabletDevice ? height * 0.16 : (height > 600 ? height * 0.12 : height * 0.2)}px;
  position: absolute;
  bottom: 0;
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

const BottomMenu = ({ menus, selectedMenu, setSelectedMenu }) => {
  const navigation = useNavigation();
  const { width, height } = useWindowDimensions();

  const isTabletDevice = isTablet(width, height);

  const handleMenuPress = (menu) => {
    setSelectedMenu(menu);
    navigation.navigate(menu.src);
  };

  return (
    <Container height={height} isTabletDevice={isTabletDevice}>
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