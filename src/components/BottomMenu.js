import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity, Text, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TextStyle from "./TextStyle";

const { width, height } = Dimensions.get('window');

const Container = styled.View`
  width: 100%;
  height: ${height * 0.12}px;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #FAFAFA;
  borderTopWidth: 2px;
  borderTopColor: #CFCFCF;
  `;

const MenuItem = styled.TouchableOpacity`
  padding: 10px;
`;

const BottomMenu = ({ menus, selectedMenu, setSelectedMenu }) => {
  const navigation = useNavigation();

  const handleMenuPress = (menu) => {
    setSelectedMenu(menu);
    navigation.navigate(menu.src);
  };

  return (
    <Container>
      {menus.map((menu, index) => (
        <MenuItem key={index} onPress={() => handleMenuPress(menu)}>
          <TextStyle
          color ={selectedMenu.name === menu.name ? "black" : "darkgray"}
          text={menu.name}
          size="xsmall"
          weight="bold"
          />
        </MenuItem>
      ))}
    </Container>
  );
};

export default BottomMenu;