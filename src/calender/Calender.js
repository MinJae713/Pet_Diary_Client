import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import ContentHeader from "./ContentHeader";
import GridCalender from "./GridCalender";
import TodosComp from "./TodosComp";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import HeaderComp from "../header/HeaderComp";
import {
  getTodosCalFromDateAPI,
  addTodosCalOfDateAPI,
  addTodoCalAPI,
  editFeelIdxAPI,
  deleteTodoCalAPI,
  editTodoCalAPI,
} from "../api/Calender";
import {
  addEditTodosCalOfDateForm,
  addTodoCalForm,
  editTodoCalForm,
} from "../reqForms/Calender";
import propTypes from "prop-types";

const Calendar = ({ navigation, route }) => {
  let client = route.params.client;
  let now = new Date();
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [day, setDay] = useState(new Date().getDate());
  const [currentFeelsIdx, setCurrentFeelsIdx] = useState(0);
  const [currentTodos, setCurrentTodos] = useState([]);

  useEffect(() => {
    changeSelectedDateInfo(year, month, day);
  }, []);

  const handleYearChange = (newYear) => {
    setYear(newYear);
    setMonth(1);
    setDay(1);
    changeSelectedDateInfo(newYear, 1, 1);
  };

  const handleMonthChange = (newMonth) => {
    if (newMonth == 0) {
      setYear(year - 1);
      setMonth(12);
      setDay(1);
      changeSelectedDateInfo(year - 1, 12, 1);
    } else if (newMonth == 13) {
      setYear(year + 1);
      setMonth(1);
      setDay(1);
      changeSelectedDateInfo(year + 1, 1, 1);
    } else {
      setMonth(newMonth);
      setDay(1);
      changeSelectedDateInfo(year, newMonth, 1);
    }
  };

  const handleDateSelection = (year, month, day) => {
    // 날짜 선택 시 날짜 변경
    setYear(year);
    setMonth(month);
    setDay(day);
    changeSelectedDateInfo(year, month, day);
  };
  const getTodosOfDate = async (year, month, day) => {
    // changeSelectedDateInfo, setFeelCondition, addTodo에서 씀
    const dateId = year + "-" + month + "-" + day;
    const response = await getTodosCalFromDateAPI(dateId, client.id);
    const resData = response.data;
    return resData.content;
  };
  const changeSelectedDateInfo = async (year, month, day) => {
    /** y,m,d에 따른 TodosCalOfDate를 api 보내서 받아옴(GET) */
    const content = await getTodosOfDate(year, month, day);
    // content는 null로 반환될 수 있음
    if (content == null) {
      setCurrentFeelsIdx(0);
      setCurrentTodos([]);
    } else {
      setCurrentFeelsIdx(content.feelIdx);
      setCurrentTodos(content.todos);
    }
  };
  const setFeelCondition = async (idx) => {
    // feelIdx 받으면 y,m,d 갖고 TodosCalOfDate 데이터가 있는지 확인(GET)
    const content = await getTodosOfDate(year, month, day);
    const dateId = year + "-" + month + "-" + day;
    const form = addEditTodosCalOfDateForm(dateId, idx, client.id);
    let editResult = null;
    if (content == null) editResult = await addTodosCalOfDateAPI(form);
    else editResult = await editFeelIdxAPI(form);
    const editData = editResult.data;
    if (editData.success) setCurrentFeelsIdx(editData.content.feelIdx);
  };
  const addTodo = async () => {
    // y,m,d 갖고 TodosCalOfDate 데이터가 있는지 확인(GET)
    const content = await getTodosOfDate(year, month, day);
    const dateId = year + "-" + month + "-" + day;
    const form = addEditTodosCalOfDateForm(dateId, 0, client.id);
    if (content == null) await addTodosCalOfDateAPI(form);
    const ID = Date.now().toString();
    const formTodo = addTodoCalForm(ID, "", dateId, client.id);
    const resAdd = await addTodoCalAPI(formTodo);
    const resAddData = resAdd.data;
    if (resAddData.success) setCurrentTodos(resAddData.content.todos);
  };
  const deleteTodo = async (id) => {
    // id 받으면 그 id에 해당하는 할일(todo) 삭제 API 보냄(DELETE)
    const response = await deleteTodoCalAPI(id);
    const resData = response.data;
    if (resData.success) changeSelectedDateInfo(year, month, day);
  };
  const editTodo = async (item) => {
    // item 받으면 item의 id에 해당하는 할 일의 text변경 api 보냄(PATCH - item 보내면 될 듯)
    const form = editTodoCalForm(item.id, item.text);
    const response = await editTodoCalAPI(form);
    const resData = response.data;
    if (resData.success) changeSelectedDateInfo(year, month, day);
  };
  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <View style={{ marginBottom: 40 }} />
        <HeaderComp navigation={navigation} title={"Calender"} />
        <View style={styles.calView}>
          <GridCalender
            year={year}
            month={month}
            handleDateSelection={handleDateSelection}
            handleMonthChange={handleMonthChange}
            handleYearChange={handleYearChange}
            now={now}
          />
        </View>
        <View style={styles.contentView}>
          <ContentHeader
            year={year}
            month={month}
            day={day}
            setFeelCondition={setFeelCondition}
            feelsIdx={currentFeelsIdx}
          />
          <TodosComp
            todos={currentTodos}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            addTodo={addTodo}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

Calendar.propTypes = {
  navigation: propTypes.object.isRequired,
  route: propTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  calView: {
    flex: 3,
    marginBottom: 5,
    alignSelf: "center",
  },
  contentView: {
    flex: 3,
  },
});

export default Calendar;
