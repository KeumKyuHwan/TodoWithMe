import { PixelRatio } from 'react-native';

export const remToPx = (rem) => {
    const baseFontSize = 16;
    const scale = PixelRatio.get();
    return rem * baseFontSize * scale;
};

// yyyy년 MM월 형식
export const formatYearMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    return `${year}년 ${month < 10 ? `0${month}` : month}월`;
  };