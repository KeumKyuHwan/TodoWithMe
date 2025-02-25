import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const MultiIconButton = ({ icon, color = '#CFCFCF', size = 'medium', onPress }) => {
  const [isPressed, setIsPressed] = useState(false);

  // 📌 size 값을 숫자로 변환
  const getSize = () => {
    switch (size) {
      case 'xsmall':
        return 20;
      case 'small':
        return 30;
      case 'medium':
        return 40;
      case 'large':
        return 50;
      case 'xlarge':
        return 60;
      default:
        return 40;
    }
  };

  // 📌 icon 값에 따라 아이콘 이름 설정
  const getIconName = () => {
    switch (icon) {
      case 'close':
        return 'close-outline';
      case 'back':
        return 'chevron-back-outline';
      case 'check':
        return 'checkmark-outline';
      default:
        return 'alert-circle-outline'; // 기본값: 알림 아이콘
    }
  };

  // 📌 클릭 시 색상 변경 및 이벤트 전달
  const handlePress = () => {
    setIsPressed(!isPressed);

    // 📌 onPress가 전달된 경우 실행
    if (onPress) {
      onPress(icon);  // 클릭한 아이콘의 이름을 인자로 전달
    }
  };

  return (
    <TouchableOpacity 
      onPress={handlePress} 
      style={{
        width: getSize() + 20,  
        height: getSize() + 20, 
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Ionicons 
        name={getIconName()} 
        size={getSize()} 
        color={isPressed ? '#000000' : color}
      />
    </TouchableOpacity>
  );
};

export default MultiIconButton;

// 사용 예시
//const handleIconPress = (icon) => {
//  console.log(`${icon} 아이콘을 클릭했어!`);
//};
//
//<MultiIconButton icon="check" size="xsmall" onPress={handleIconPress} />