import React, { useState, useEffect } from 'react';
import { Calendar } from 'react-native-big-calendar';
import axios from 'axios';
import styled from 'styled-components/native';
import { formatYearMonth } from "../utils/Converter";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert, ActivityIndicator, StyleSheet, View, Text } from 'react-native';
import TextStyle from "./TextStyle";
import 'dayjs/locale/ko';

const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

const TitleContainer = styled.View`
  flex: 0.5;
  margin-bottom: 20px;
`;

const CalendarContainer = styled.View`
  flex: 3;
`;

const EventContainer = styled.View`
  background-color: ${(props) => props.bgColor || '#FFEBF1'};
  padding: 5px;
  border-radius: 5px;
`;

const CalendarComp = ({ events, selectedDate, setSelectedDate, isTabletDevice }) => {
  const [holidays, setHolidays] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [loading, setLoading] = useState(true);

  // 공휴일 데이터 API에서 가져옴
  const fetchData = async () => {
    const year = currentMonth.getFullYear();
    const url = 'http://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/getHoliDeInfo';
    const serviceKey = 'MsCeKx%2F%2Fn6Vs4WzFu0Qv%2FtOGWlc%2BvVMApTL2DntQSLHCjSMOSB%2BDYk2ey%2FEOTrrraHkLQGf8P%2B1YE2VjGaJLdw%3D%3D';
    const queryParams = `?solYear=${year}&serviceKey=${serviceKey}&numOfRows=100`;

    try {
      const response = await axios.get(url + queryParams);
      const holidayList = response.data.response.body.items.item;
      setHolidays(holidayList || []);

      // 공휴일 데이터를 로컬에 저장
      await AsyncStorage.setItem('holidays', JSON.stringify(holidayList || []));
    } catch (error) {
      console.error('Error:', error);

      // 네트워크 오류시 로컬 저장소에서 캐시된 데이터 사용
      const cachedHolidays = await AsyncStorage.getItem('holidays');
      if (cachedHolidays) {
        setHolidays(JSON.parse(cachedHolidays));
      } else {
        Alert.alert(
          '네트워크 연결 오류',
          '인터넷에 연결되지 않았습니다. 공휴일 데이터를 가져올 수 없습니다.',
          [{ text: '확인' }]
        );
      }
    } finally {
      setLoading(false);  // 데이터 로딩 완료
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // 공휴일을 이벤트로 변환
  const holidayEvents = holidays.map((holiday) => {
    const locdateString = holiday.locdate.toString(); // locdate를 문자열로 변환
    return {
      title: holiday.dateName,  // 공휴일 이름
      start: new Date(`${locdateString.substring(0, 4)}-${locdateString.substring(4, 6)}-${locdateString.substring(6, 8)}`), // 시작 날짜
      end: new Date(`${locdateString.substring(0, 4)}-${locdateString.substring(4, 6)}-${locdateString.substring(6, 8)}`), // 끝 날짜 (하루짜리 공휴일이므로 시작과 끝이 같음)
      allDay: true,
      bgColor: "#CE3F40",
      color: "white"
    };
  });

  // 기존 이벤트에 공휴일 이벤트를 합침
  const combinedEvents = [...events, ...holidayEvents];

  // 이벤트 렌더링
  const renderEvent = (event) => {
    return (
      <EventContainer bgColor={event.bgColor}>
        <TextStyle
          color={event.color || "black"}
          text={event.title}
          size={isTabletDevice ? "tiny" : "xtiny"}
        />
      </EventContainer>
    );
  };

  const renderHeader = (date) => {
    // 요일을 일요일부터 토요일까지 배열로 만들기
    const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];

    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        {daysOfWeek.map((day, index) => {
          // 일요일은 빨간색으로 설정
          const style = index === 0 ? { color: 'red' } : {};
          return (
            <Text key={index} style={style}>
              {day}
            </Text>
          );
        })}
      </View>
    );
  };

  return (
    <Container>
      <TitleContainer>
        {/* 제목 */}
        <TextStyle
          color={"black"}
          text={formatYearMonth(currentMonth)}
          size={isTabletDevice ? "large" : "xsmall"}
          weight="bold"
          textAlign="left"
        />

        {/* 이번 달 금액 */}
        <TextStyle
          color="darkgray"
          text={`이번달 급여 +`}
          size={isTabletDevice ? "xsmall" : "tiny"}
          textAlign="right"
        />
      </TitleContainer>

      <CalendarContainer>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />  // 로딩 인디케이터 추가
        ) : (
          <Calendar
           headerComponent={renderHeader}
            mode={'month'}
            events={combinedEvents} // 부모에서 전달받은 이벤트 목록과 공휴일 이벤트 결합
            initialDate={new Date()} // 초기 날짜 (현재 날짜)
            onDayPress={(date) => alert(date)} // 날짜 클릭 시
            renderEvent={renderEvent}
            firstDayOfWeek={1} // 주 시작 요일 (월요일)
            onPressCell={(date) => {
              setSelectedDate(date.dateString);
              alert(selectedDate);
            }}
            onSwipeEnd={(date) => setCurrentMonth(date)}
            locale="ko"

          />
        )}
      </CalendarContainer>
    </Container>
  );
};

export default CalendarComp;
