import React, { useState } from "react";
import { View } from "react-native";
import { Checkbox, Text } from 'react-native-paper';

function TodoCheck() {
    const [checked, setChecked] = useState(false);

    return (
            <View style={{ flexDirection: 'row' }}>
                <Checkbox
                    status={checked ? 'checked' : 'unchecked'}
                    onPress={() => 
                        setChecked(!checked)}
                />
                <Text>{checked ? 'Checked' : 'Unchecked'}</Text>
            </View>
    );
}

export default TodoCheck;
