import React from "react";
import styled from "styled-components/native";
import { Text } from "react-native";
import { remToPx } from "../utils/Converter";

const Font = styled(Text)`
color : ${(props) => {
    switch (props.color) {
        case 'lightgray' :
            return `rgb(207,207,207)`;
        case 'darkgray' :
            return `rgb(130,130,130)`;
        case 'black' : 
            return `rgb(0,0,0)`;
        case 'white' :
            return `rgb(255,255,255)`;
        default :
            return `rgb(0,0,0)`; // 기본값
    }
}
};

font-size: ${(props) => {
    switch (props.size) {
        case 'xsmall':
            return `${remToPx(0.75)}px`; // 12px
        case 'small' : 
            return `${remToPx(1)}px`; // 16px
        case 'medium' : 
            return `${remToPx(1.25)}px`; // 20px
        case 'large' :
            return `${remToPx(1.5)}px`; // 24px
        case 'xlarge' :
            return `${remToPx(2)}px`; // 32px
        default :
            return `${remToPx(1.25)}px`; // 기본값
    }
}
};

font-weight : ${(props) => {
    switch (props.weight) {
        case 'normal' :
            return 'normal' ;
        case 'bold' :
            return 'bold' ;
        default:
            return 'normal' ;
    }
}}

`

function TextStyle ({text, color, size, weight, adjustsFontSizeToFit, minimumFontScale}) {
    return (
    <Font
    color={color}
    size={size}
    weight={weight}
    adjustsFontSizeToFit={adjustsFontSizeToFit}
    minimumFontScale={minimumFontScale}
    numberOfLines={1}
    >
        {text}
    </Font>
    )
}

export default TextStyle;

// 밑에 사용하는 폰트 만들어서 사용할 것
