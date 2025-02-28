import React, { useState } from 'react';
import { TextInput } from 'react-native';
import styled from 'styled-components/native';

const MoneyInput = ({ value, onChange, placeholder = '금액 입력', currency = '₩' ,width='100%' }) => {
  const [formattedValue, setFormattedValue] = useState('');

  // 📌 천 단위 콤마 추가 함수
  const formatNumber = (num) => {
    if (!num) return '';
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  // 📌 숫자만 입력 가능하게 처리 및 포맷 적용
  const handleChange = (text) => {
    const onlyNums = text.replace(/[^0-9]/g, ''); // 숫자만 남김
    const formatted = formatNumber(onlyNums);
    setFormattedValue(formatted);
    onChange && onChange(onlyNums); // 콤마 없는 숫자값 전달
  };

  return (
    <Container width={width}>
      <Currency>{currency}</Currency>
      <StyledTextInput
        value={formattedValue}
        onChangeText={handleChange}
        placeholder={placeholder}
        keyboardType="numeric"  // 📌 숫자 키패드만 보이게 설정
      />
    </Container>
  );
};

// styled-components
const Container = styled.View`
  flex-direction: row;
  align-items: center;
  border: 1px solid #CFCFCF;
  border-radius: 5px;
  padding: 2px;
  width: ${({ width }) => width};
  height: auto;
`;

const Currency = styled.Text`
  font-size: 16px;
  margin-right: 5px;
  color: #333;
`;

const StyledTextInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: #333;
`;

export default MoneyInput;
