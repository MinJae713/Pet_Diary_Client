import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import Text from "./DefaultText";
import propTypes from "prop-types";

const CheckListWeekly = ({
  day,
  loadTodos,
  date,
  today,
  selectedDate,
  setSelectedDate,
}) => {
  return (
    <View style={styles.container}>
      <Text>{day}</Text>
      <Pressable
        style={[
          styles.button,
          selectedDate == date
            ? styles.selectedWeeklyBtn
            : day == today
            ? styles.todayBtn
            : styles.weeklyBtn,
        ]}
        onPressIn={() => {
          loadTodos(date);
          setSelectedDate(date);
        }}
      ></Pressable>
      <Text>{date.getDate()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 80,
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    width: 25,
    height: 25,
  },
  selectedWeeklyBtn: {
    backgroundColor: "#745757",
  },
  weeklyBtn: {
    backgroundColor: "#D9D9D9",
  },
  todayBtn: {
    borderColor: "#745757",
    borderWidth: 3,
    backgroundColor: "#D9D9D9",
  },
});

CheckListWeekly.propTypes = {
  day: propTypes.string.isRequired,
  date: propTypes.instanceOf(Date),
  loadTodos: propTypes.func.isRequired,
  today: propTypes.string.isRequired,
  selectedDate: propTypes.instanceOf(Date),
  setSelectedDate: propTypes.func.isRequired,
};

export default CheckListWeekly;
