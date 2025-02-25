import React, { useState } from 'react';
import { View, Text } from 'react-native';
import ColorButton from "../components/ColorButton";
import ColorSelector from "../components/ColorSelector";
import InfoBox from "../components/InfoBox";
import { calendarBgColor } from '../constants/colorConstants';
import AddButton from "../components/AddButton";
import DiaryMenu from "../components/DiaryMenu";
import Icon from "../components/Icon";



const DiaryScreen = ({ route }) => {

const menus = [
    { name: "sunny-outline", color: "#828282" },
    { name: "cloudy-outline", color: "#828282" },
    { name: "rainy-outline", color: "#828282" },
    { name: "snow-outline", color: "#828282" }
];

    const [selectedColor, setSelectedColor] = useState(calendarBgColor[0]);
    const [isVisible, setIsVisible] = useState(false);
    const { width, isTabletDevice } = route.params;
    const [selectedMenu, setSelectedMenu] = useState(menus[0]);

    const handlePress = () => {
        setIsVisible(!isVisible);
    };

    const handleCloseModal = () => {
        setIsVisible(false); // 모달 닫기
    };


    return (
        <View>
            <Text>다이어리</Text>
            <ColorButton handlePress={handlePress} bgColor={selectedColor} size="xsmall"> 색상 </ColorButton>
            <ColorButton handlePress={handlePress} bgColor={selectedColor} size="small"> 색상 </ColorButton>
            <ColorButton handlePress={handlePress} bgColor={selectedColor} size="medium"> 색상 </ColorButton>
            <ColorButton handlePress={handlePress} bgColor={selectedColor} size="large"> 색상 </ColorButton>
            <ColorButton handlePress={handlePress} bgColor={selectedColor} size="xlarge"> 색상 </ColorButton>
            <ColorButton handlePress={handlePress} bgColor={selectedColor} > 색상 </ColorButton>
            {isVisible &&
                <ColorSelector
                    colorOption={calendarBgColor}
                    selectedColor={selectedColor}
                    setSelectedColor={setSelectedColor}
                    handleCloseModal={handleCloseModal}
                    setIsVisible={setIsVisible}
                    isTabletDevice={isTabletDevice}
                />
            }
            <InfoBox />

            <AddButton />
            <DiaryMenu
            menus={menus}
            selectedMenu={selectedMenu}
            setSelectedMenu={setSelectedMenu}
            />

        </View>
    );
};

export default DiaryScreen;