import React from "react";
import OneTodo from "../components/calender/OneTodo";
import { StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";
import TodoAddButton from "../components/calender/TodoAddButton";

const TodosComp = ({ todos, deleteTodo, editTodo, addTodo }) => {
  const todoInputs = Object.values(todos).map((todo, index) => (
    <OneTodo
      key={todo.id}
      item={todo}
      deleteTodo={deleteTodo}
      editTodo={editTodo}
      index={index}
    />
  ));
  const getAddButton = () => {
    if (Object.values(todos).length != 5) {
      return (
        <View style={styles.addButton}>
          <TodoAddButton
            buttonOperate={() => {
              // 여기에서 포커스 잡게 못하나...
              addTodo();
            }}
          />
        </View>
      );
    }
  };
  return (
    <View style={{ flex: 5, marginLeft: 10 }}>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.todoTitleView}>
          <View style={{ marginBottom: 5 }}></View>
          <Text style={styles.todoTitle}>Things to do</Text>
        </View>
        <View style={{ width: 15 }} />
        <View>
          <Text style={{ fontWeight: "bold" }}>
            할 일 갯수 : {Object.values(todos).length}/5
          </Text>
          <Text style={{ fontWeight: "bold" }}>5개까지 입력 가능합니다.</Text>
        </View>
      </View>
      {todoInputs}
      {getAddButton()}
    </View>
  );
};

TodosComp.propTypes = {
  todos: PropTypes.array.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  todoTitleView: {
    width: 100,
    height: 30,
    marginBottom: 20,
    marginTop: 2,
    borderRadius: 12,
    alignItems: "center",
    backgroundColor: "#745757",
    marginLeft: 3,
  },
  todoTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  addButton: {
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default TodosComp;
