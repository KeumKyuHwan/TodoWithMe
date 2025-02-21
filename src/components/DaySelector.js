import { useState } from "react"
import styled from 'styled-components/native';

const DaySelector=()=>{

    const [selectedDays, setSelectedDays] = useState([]);

    const days = ['월','화','수','목','금','토','일'];

    const handleDaySelect = (day)=>{
        if(selectedDays.includes(day)){
            setSelectedDays(selectedDays.filter((d)=>d !== day));
        }else {
            setSelectedDays([...selectedDays,day]);
        }
    };

    return(
        <Container>
            {days.map((day)=>(
                <DayButton key={day} onPress={()=> handleDaySelect(day)}>
                    <DayText isSelected = {selectedDays.includes(day)}>{day}</DayText>
                </DayButton>
            ))}
        </Container>
    )
};

const Container = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  width : 100%
`;

const DayButton = styled.TouchableOpacity`
  padding: 5px 10px;
`;

const DayText = styled.Text`
  font-size: 20px;
  color: ${({ isSelected }) => (isSelected ? '#000' : 'gray')};
  font-weight: ${({ isSelected }) => (isSelected ? 'bold' : 'normal')};
`;

export default DaySelector;