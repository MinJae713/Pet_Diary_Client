import React from "react";
import { Text, View } from "react-native";
import PropTypes from "prop-types";
import DateSelectHeader from "../components/calender/DateSelectHeader";
import DateSelectButton, {
  ButtonType,
} from "../components/calender/DateSelectButton";
import DateSelector, { SelectTypes } from "./DateSelector";

const GridCalender = ({
  year,
  month,
  handleDateSelection,
  handleMonthChange,
  handleYearChange,
  now,
}) => {
  // 월별 일수 계산 함수
  const getDaysInMonth = (year, month) => {
    return new Date(year, month, 0).getDate();
  };

  // 요일 계산 함수 (0: 일요일 ~ 6: 토요일)
  const getFirstDayOfWeek = (year, month, day) => {
    return new Date(year, month - 1, day).getDay();
  };
  const getLastDayOfWeek = (year, month, day) => {
    return new Date(year, month - 1, day).getDay();
  };

  const daysInMonth = getDaysInMonth(year, month);
  const firstDayOfWeek = getFirstDayOfWeek(year, month, 1);
  const lastDayOfWeek = getLastDayOfWeek(year, month, daysInMonth);
  const calendar = [];
  // 요일 헤더
  calendar.push(<DateSelectHeader key={"weekDayView"} />);
  // 날짜 출력
  let row = [];
  let isFirst = true;
  for (let i = 0; i < firstDayOfWeek; i++) {
    row.push(<Text key={`empty-${i}`} />);
  }
  if (isFirst) {
    for (let i = 0; i < firstDayOfWeek; i++) {
      row.push(
        <DateSelectButton
          key={i + " DUMY"}
          year={year}
          month={month}
          day={-1}
          handleDateSelection={handleDateSelection}
          buttonType={ButtonType.DUMY}
          defaultString=""
          firstDayOfWeek={-1}
          now={now}
        />
      );
    }
  }
  for (let day = 1; day <= daysInMonth; day++) {
    const date = `${year}-${month}-${day}`;
    row.push(
      <DateSelectButton
        key={date}
        year={year}
        month={month}
        day={day}
        handleDateSelection={handleDateSelection}
        buttonType={ButtonType.DAY}
        defaultString=""
        firstDayOfWeek={getFirstDayOfWeek(year, month, day)}
        now={now}
      />
    );
    if ((firstDayOfWeek + day) % 7 === 0 || day === daysInMonth) {
      if (day == daysInMonth) {
        for (let i = 0; i < 6 - lastDayOfWeek; i++) {
          row.push(
            <DateSelectButton
              key={i + " DUMY"}
              year={year}
              month={month}
              day={-1}
              handleDateSelection={handleDateSelection}
              buttonType={ButtonType.DUMY}
              defaultString=""
              firstDayOfWeek={-1}
              now={now}
            />
          );
        }
      }
      // firstDayOfWeek : 한 주의 첫 일
      calendar.push(
        <View
          key={day}
          style={{
            flexDirection: "row",
            justifyContent: isFirst ? "flex-end" : "flex-start",
            borderColor: "#745757",
          }}
        >
          {row}
        </View>
      );
      isFirst = false;
      row = [];
    }
  }
  return (
    <View>
      <View style={{ marginBottom: 7 }}></View>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <DateSelector
          selectorType={SelectTypes.YEAR}
          operate={handleYearChange}
          dateValue={year}
        />
        <DateSelector
          selectorType={SelectTypes.MONTH}
          operate={handleMonthChange}
          dateValue={month}
        />
      </View>
      <View style={{ marginBottom: 7 }}></View>
      <View style={{ borderWidth: 1, borderColor: "#745757" }}>{calendar}</View>
    </View>
  );
};

GridCalender.propTypes = {
  year: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  handleDateSelection: PropTypes.func.isRequired,
  handleMonthChange: PropTypes.func.isRequired,
  handleYearChange: PropTypes.func.isRequired,
  now: PropTypes.instanceOf(Date).isRequired,
};

export default GridCalender;
