import React from "react";
import { View } from "react-native";

// 아이콘들
import SunnyIcon from "../assets/icon/sunny.svg";
import CoudyIcon from "../assets/icon/cloudy.svg";
import RainyIcon from "../assets/icon/rainy.svg";
import SnowyIcon from "../assets/icon/snowy.svg";

// props로 받을 아이콘
const icons = {
    sunny: SunnyIcon,
    cloudy: CoudyIcon,
    rainy: RainyIcon,
    snowy: SnowyIcon
}

const Icon = ({ name, size = 33, color = "#000000" }) => {
 // 아이콘 매칭
  const SvgIcon = icons[name];
  if (!SvgIcon) return null;

  return <SvgIcon width={size} height={size} fill={color} />;
};

export default Icon;