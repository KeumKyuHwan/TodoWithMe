import React, { useState } from "react";
import { View, StyleSheet, Text, Animated } from "react-native";
import Line from "../components/Line";
import TextStyle from "../components/TextStyle";
import AddButton from "../components/AddButton";

const WorkplaceScreen = ({ route }) => {
    const { width, isTabletDevice } = route.params; // 디바이스 크기 정보 가져오기
    const [showAddButtons, setShowAddButtons] = useState(false);
    const [addButtonPosition] = useState(new Animated.Value(0)); // 애니메이션 값

    // 폰과 태블릿에 맞는 스타일 정의
    const textSize = isTabletDevice ? "large" : "xxsmall";  // 태블릿은 'large', 폰은 'xxsmall' 크기
    const buttonSize = isTabletDevice ? "large" : "xsmall";
    const containerPadding = isTabletDevice ? 40 : 20; // 태블릿은 패딩을 더 크게

    const toggleButtons = () => {
        setShowAddButtons(!showAddButtons);
        // 버튼이 나타나거나 사라질 때 애니메이션 추가
        Animated.spring(addButtonPosition, {
            toValue: showAddButtons ? 0 : 1, // 애니메이션 값 0과 1로 변화
            useNativeDriver: true,
        }).start();
    };

    return (
        <View style={{ flex: 1 }}>
            <View style={[styles.container, { padding: containerPadding }]}>
                <TextStyle text="근무 현황" color="black" size={textSize} weight="bold" textAlign="center" />
                <Line color="lightgray" style={styles.line} />
            </View>

            {/* + 버튼 및 추가 버튼들 함께 애니메이션 */}
            <View style={styles.buttonContainer}>
                <AddButton onPress={toggleButtons} size={buttonSize} color="#000" style={styles.addButton}/>

                {/* 애니메이션을 추가한 텍스트 버튼들 */}
                {showAddButtons && (
                    <Animated.View
                        style={[
                            styles.additionalButtons,
                            {
                                transform: [
                                    {
                                        translateY: addButtonPosition.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [40, -50], // 버튼 위로 40px 이동
                                        }),
                                    },
                                ],
                            },
                        ]}
                    >
    <View style={styles.textContainer}>
        <TextStyle text="근무지" color="black" size={isTabletDevice ? "medium" : "xxxsmall"} textAlign="center" />
        <TextStyle text="추가" color="black" size={isTabletDevice ? "medium" : "xxxsmall"} textAlign="center" />
    </View>
    <View style={styles.textContainer}>
        <TextStyle text="급여" color="black" size={isTabletDevice ? "medium" : "xxxsmall"} textAlign="center" />
        <TextStyle text="추가" color="black" size={isTabletDevice ? "medium" : "xxxsmall"} textAlign="center" />
    </View>
                    </Animated.View>
                )}
            </View>
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
    buttonContainer: {
        position: "absolute",
        bottom: 20, // + 버튼이 bottom 30에 위치
        right: 20,
    },
    addButton: {
        position: "absolute", // addButton이 고정된 위치에서 움직이도록 설정
        bottom: 0,
        right: 0,
    },
    additionalButtons: {
        position: "absolute", // 텍스트 버튼들이 고정된 위치에서 애니메이션되도록 설정
        bottom: isTabletDevice ? 100 : 30, // 기본적으로 + 버튼 위에 위치하도록 설정
        right: 0,
        backgroundColor: '#f0f0f0',
        padding: 15, // 패딩을 늘려서 버튼 크기 확대
        minHeight: 100, // 최소 높이 설정
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ddd',
        marginTop: 10, // 버튼들 사이에 간격 추가
    },
    textContainer: {
        justifyContent: 'center', // 텍스트를 중앙 정렬
        alignItems: 'center', // 세로 중앙 정렬
        marginBottom: 10, // 각 텍스트 사이에 간격 추가
    },
});
