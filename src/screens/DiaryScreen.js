import React, { useState } from 'react';
import { View, Text } from 'react-native';
import ColorButton from "../components/ColorButton";
import ColorSelector from "../components/ColorSelector";
import { calendarBgColor } from '../constants/colorConstants';

const DiaryScreen = ({route}) => {
    const [selectedColor, setSelectedColor] = useState(calendarBgColor[0]);
    const [isVisible, setIsVisible] = useState(false);
    const { width, isTabletDevice} = route.params;

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
        </View>
    );
};

export default DiaryScreen;