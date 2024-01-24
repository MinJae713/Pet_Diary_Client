/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Image } from "react-native";
import uuid from "react-uuid";

import CheckListWeekly from "../components/checkList/CheckListWeekly";
import AddTaskInput from "../components/checkList/AddTaskInput";
import TodoList from "../components/checkList/TodoList";
import MediumText from "../components/checkList/MediumText";
import BoldText from "../components/checkList/BoldText";
import {
  year,
  month,
  toDaysArr,
  dayStr,
  getDayStr,
  weekOfToday,
  weekStr,
  todate,
} from "../components/DateGetter";
import { addTodoCheckForm } from "../reqForms/Checklist";
import {
  addTodoCheckAPI,
  delelteTodoCheckAPI,
  loadTodosCheckAPI,
  toggleTodoCheckAPI,
} from "../api/Checklist";
import propTypes from "prop-types";

const CheckList = ({ route }) => {
  let client = route.params.client;
  const [selectedDate, setSelectedDate] = useState(todate);
  const [Todos, setTodos] = useState([]);

  useEffect(() => {
    loadTodos(todate);
  }, []);

  const addTodo = async (text, selectedDate) => {
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth() + 1;
    const dDate = selectedDate.getDate();
    const writeDate = year + "-" + month + "-" + dDate;
    const newTask = addTodoCheckForm(uuid(), text, false, writeDate, client.id);
    const response = await addTodoCheckAPI(newTask);
    const resData = response.data;
    alert(resData.message);
    if (resData.success) setTodos(resData.content);
  };
  const onRemove = (id, writeDate) => async () => {
    const response = await delelteTodoCheckAPI(id, client.id, writeDate);
    const resData = response.data;
    if (resData.success) setTodos(resData.content);
    else alert(resData.message);
  };
  const onToggle = (id, writeDate) => async () => {
    const response = await toggleTodoCheckAPI(id, client.id, writeDate);
    const resData = response.data;
    if (resData.success) setTodos(resData.content);
    else alert(resData.message);
  };
  const loadTodos = async (date) => {
    // 얘는 실제 Date 객체 받음(조심)
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const dDate = date.getDate();
    const writeDate = year + "-" + month + "-" + dDate;
    const response = await loadTodosCheckAPI(client.id, writeDate);
    const resData = response.data;
    if (resData.success) setTodos([...resData.content]);
    else setTodos([]);
  };
  const dateInfos = [
    // 날짜 표시
    { id: "monday", day: getDayStr[0], date: toDaysArr[0] },
    { id: "tusday", day: getDayStr[1], date: toDaysArr[1] },
    { id: "wednesday", day: getDayStr[2], date: toDaysArr[2] },
    { id: "thurday", day: getDayStr[3], date: toDaysArr[3] },
    { id: "friday", day: getDayStr[4], date: toDaysArr[4] },
    { id: "saturday", day: getDayStr[5], date: toDaysArr[5] },
    { id: "sunday", day: getDayStr[6], date: toDaysArr[6] },
  ];
  const checkListWeeklies = Object.values(dateInfos).map((item) => (
    // 날짜 반영한 월~일 표시 코드
    <CheckListWeekly
      key={item.id}
      day={item.day}
      loadTodos={loadTodos}
      date={item.date}
      today={dayStr}
      selectedDate={selectedDate}
      setSelectedDate={setSelectedDate}
    />
  ));
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.content}>
        <BoldText style={styles.title}>CHECKLIST</BoldText>
        <View style={styles.weekly}>
          <MediumText
            style={{
              fontSize: 17,
              fontWeight: 500,
              marginBottom: 20,
              marginLeft: 5,
            }}
          >
            {year}년 {month}월 {weekStr[weekOfToday]}째 주
          </MediumText>
          <View style={styles.weeklyButtonContainer}>{checkListWeeklies}</View>
          <View
            style={{
              marginTop: 15,
              paddingVertical: 10,
              alignSelf: "center",
            }}
          >
            <Image
              source={require("../../assets/images/paw1.png")}
              style={{ width: 320, height: 30 }}
            />
          </View>
        </View>
        <View style={styles.checkList}>
          <AddTaskInput onAddTodo={addTodo} selectedDate={selectedDate} />
          <TodoList Todos={Todos} onRemove={onRemove} onToggle={onToggle} />
        </View>
      </View>
    </View>
  );
};

CheckList.propTypes = {
  route: propTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    marginTop: 60,
    marginHorizontal: 26,
    alignItems: "center",
  },
  title: {
    fontSize: 30,
  },
  weekly: {
    width: "100%",
    marginHorizontal: 35,
    marginVertical: 30,
    alignItems: "flex-start",
  },
  weeklyButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  checkList: {
    width: "90%",
    height: "55%",
  },
});

export default CheckList;
