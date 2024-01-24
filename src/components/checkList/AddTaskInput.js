import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import propTypes from "prop-types";

const AddTaskInput = ({ onAddTodo, selectedDate }) => {
  const [NewTodoItem, setNewTodoItem] = useState("");
  const todoInputHandler = (newTodo) => {
    setNewTodoItem(newTodo);
  };
  const addTodoHandler = () => {
    NewTodoItem == ""
      ? Alert.alert("", "내용을 입력해주세요.")
      : onAddTodo(NewTodoItem, selectedDate);
    setNewTodoItem("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputText}
        placeholder="Add new TO-DO !"
        autoCorrect={false}
        onChangeText={todoInputHandler}
        value={NewTodoItem}
      />
      <TouchableOpacity onPress={addTodoHandler}>
        <MaterialCommunityIcons
          style={styles.addBtn}
          size={30}
          name="plus-circle"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 3,
    backgroundColor: "#FFF",
    paddingHorizontal: 3,
    marginBottom: 12,
    height: 40,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "#bbb",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  inputText: {
    flex: 1,
  },
  addBtn: {
    color: "#745757",
  },
});

AddTaskInput.propTypes = {
  onAddTodo: propTypes.func.isRequired,
  selectedDate: propTypes.instanceOf(Date).isRequired,
};

export default AddTaskInput;
