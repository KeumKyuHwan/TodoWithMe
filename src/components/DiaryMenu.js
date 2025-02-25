import React from 'react';
import styled from 'styled-components/native';
import Icon from "./Icon";
import {remToPx} from "../utils/Converter";

const Container = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const MenuItem = styled.Pressable`
  padding: 20px;
`;

// 아이콘 크기
const getSize = (size) => {
  const sizes = {
    xsmall: 0.7 ,
    small: 0.8,
    medium: 1.2,
    large: 2,
    xlarge: 3,
    default: 1
  };
  return sizes[size]  || sizes.default ;
};


const DiaryMenu = ({ menus = [], selectedMenu = menus[0], setSelectedMenu, isTabletDevice = false }) => {

  const handleMenuPress = (menu) => {
    setSelectedMenu(menu);
  };

  return (
    <Container>
        {menus.map((menu, index) =>
        <MenuItem
         key={index}
         onPress={() => handleMenuPress(menu)}>
            <Icon
            name={menu.name}
            size={isTabletDevice ? remToPx(getSize("large")) : remToPx(getSize("medium"))}
            color={selectedMenu.name === menu.name ? "#000000" : menu.color}
            />
        </MenuItem>
        )}
    </Container>
  );
};

export default DiaryMenu;