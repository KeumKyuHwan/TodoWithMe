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
    xsmall: 0.5 ,
    small: 0.7,
    medium: 0.9,
    large: 1.1,
    xlarge: 1.2,
    default: 0.8
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
            size={isTabletDevice ? remToPx(getSize("medium")) : remToPx(getSize("xsmall"))}
            color={selectedMenu.name === menu.name ? "#000000" : menu.color}
            />
        </MenuItem>
        )}
    </Container>
  );
};

export default DiaryMenu;

// 예시
//  const menus = [
//    { name: "sunny-outline", color: "#828282" },
//    { name: "cloudy-outline", color: "#828282" },
//    { name: "rainy-outline", color: "#828282" },
//    { name: "snow-outline", color: "#828282" }
//  ];

//      <DiaryMenu
//        menus={menus}
//        selectedMenu={selectedMenu}
//        setSelectedMenu={setSelectedMenu}
//        isTabletDevice={isTabletDevice}
//      />