import React, { useState } from "react";
import { View, StyleSheet, Text, Animated } from "react-native";
import Line from "../components/Line";
import TextStyle from "../components/TextStyle";
import AddButton from "../components/AddButton";

const WorkplaceScreen = ({ route }) => {
    const { width, isTabletDevice } = route.params; // 디바이스 크기 정보 가져오기
    const [showAddButtons, setShowAddButtons] = useState(false);
    const [addButtonPosition] = useState(new Animated.Value(0));

    // 폰과 태블릿에 맞는 스타일 정의
    const textSize = isTabletDevice ? "large" : "xxsmall";  // 태블릿은 'large', 폰은 'xxsmall' 크기
    const containerPadding = isTabletDevice ? 40 : 20; // 태블릿은 패딩을 더 크게

    const toggleButtons = () => {
        setShowAddButtons(!showAddButtons);
        // 버튼이 나타나거나 사라질 때 애니메이션 추가
        Animated.spring(addButtonPosition, {
            toValue: showAddButtons ? 0 : 1,
            useNativeDriver: true
        }).start();
    };

    return (
        <View>
            <View style={[styles.container, { padding: containerPadding }]}>
                <TextStyle text="근무 현황" color="black" size={textSize} weight="bold" textAlign="center" />
                <Line color="lightgray" style={styles.line} />
            </View>
                <AddButton onPress={toggleButtons} size="large" color="#000"/>
                {showAddButtons && (
                    <View style={styles.additionalButtons}>
                    <TextStyle text="근무지 추가" color="black" size="tiny" />
                    <TextStyle text="급여 추가" color="black" size="tiny" />
                    </View>
                )}
        </View>
    );
};

export default WorkplaceScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
    },
    line: {
        marginTop: 15,
        marginBottom: 10,
      },
    additionalButtons: {
        position: 'absolute',
        bottom: 100, // + 버튼 위에 위치
        right: 30, // 오른쪽에 위치
        backgroundColor: '#f0f0f0',
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ddd',
    },
});
