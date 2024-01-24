import React from "react";
import PropTypes from "prop-types";
import { Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const TodoAddButton = ({ buttonOperate }) => {
  const IconName = ({ pressed }) => {
    return pressed ? "pluscircle" : "pluscircleo";
  };
  const _buttonOperate = () => {
    buttonOperate();
  };
  return (
    <Pressable onPressOut={_buttonOperate}>
      {({ pressed }) => (
        <AntDesign name={IconName({ pressed })} size={48} color="#745757" />
      )}
    </Pressable>
  );
};

TodoAddButton.propTypes = {
  buttonOperate: PropTypes.func.isRequired,
};

export default TodoAddButton;
