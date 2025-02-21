import { PixelRatio } from 'react-native';

export const remToPx = (rem) => {
    const baseFontSize = 16;
    const scale = PixelRatio.get();
    return rem * baseFontSize * scale;
};