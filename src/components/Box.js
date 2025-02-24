import React from 'react';
import styled from 'styled-components/native';
import { TextInput } from 'react-native'; // TextInput 추가

const BoxContainer = styled.View`
  border-radius: 5px;
  border: 1px solid #CFCFCF;
`;

const InnerBox = styled.View`
  padding: 10px;
`;

// isInput = true, 작성할 수 있는 박스
// isInput = false, 안에 내용물(children)을 넣을 수 있는 박스 (오늘의 일정 / 할일 목록)
const Box = ({isInput = false, text, setText, children}) => {
  return (
    <BoxContainer>
      {isInput ? (
        <InnerBox>
          <TextInput
            value={text}
            onChangeText={setText}
          />
        </InnerBox>
      ) : (
        <InnerBox>
          {children}
        </InnerBox>
      )}
    </BoxContainer>
  );
};

export default Box;

// 예시
//   <Box
//     isInput="true"
//     text={text}
//     setText={setText}
//    />

//    <Box>
//      <FlatList
//        data={["1","2","3"]}
//        renderItem={({ item }) => <Text>{item}</Text>}
//        keyExtractor={(item, index) => index.toString()}/>
//     </Box>