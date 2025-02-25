import React, { useState } from "react";
import { Pressable, View, Text } from "react-native";
import styled from "styled-components/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import TextStyle from "./TextStyle";
import { remToPx } from "../utils/Converter";


const Check = styled(Pressable)`
  width: 15px;
  height: ${remToPx(0.3)}px;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  border: 1px solid black;
  border-radius: 2px;
  background-color: ${({checked}) => (checked ? "rgb(0,0,0)" : "rgb(255,255,255)" )}
`;

function TodoCheck({text}) {
  const [checked, setChecked] = useState(false);

  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Check onPress={() => setChecked(!checked)} checked={checked}>
      {checked && (
          <Ionicons name="checkmark-outline" size={10} color="white" />
        )}
      </Check>
      <TextStyle text="test" size="tiny"/>
    </View>
  );
}

export default TodoCheck;
