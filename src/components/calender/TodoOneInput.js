import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import PropTypes from "prop-types";

const TodoOneInput = ({
  item,
  handleTodoChange,
  onSubmitEditing,
  onBlur,
  refInput,
}) => {
  const [currentText, setCurrentText] = useState(item.text);
  return (
    <View style={styles.todoInputView}>
      <TextInput
        value={currentText}
        ref={refInput}
        onChangeText={(text) => {
          setCurrentText(text);
          handleTodoChange(text);
        }}
        placeholder={"(할 일을 입력해 주세요)"}
        style={styles.todoInputs}
        placeholderTextColor={"#808080"}
        onSubmitEditing={onSubmitEditing}
        onBlur={onBlur}
        returnKeyType="done"
      />
    </View>
  );
};

TodoOneInput.propTypes = {
  item: PropTypes.object.isRequired,
  handleTodoChange: PropTypes.func.isRequired,
  onSubmitEditing: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  refInput: PropTypes.any.isRequired,
};

const styles = StyleSheet.create({
  todoInputs: {
    marginBottom: 30,
    color: "#745757",
    fontSize: 20,
    fontWeight: "bold",
  },
  todoInputView: {
    flexDirection: "row",
    alignItems: "baseline",
  },
});

export default TodoOneInput;
