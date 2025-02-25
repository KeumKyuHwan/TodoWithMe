import React from 'react';
import { View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Icon = ({ name, size = 33, color = "#000000" }) => {
  return <Ionicons name={name} size={size} color={color} />;
};

export default Icon;
