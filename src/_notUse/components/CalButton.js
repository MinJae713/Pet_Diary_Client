import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";

export const ButtonType = {
  EDIT: "할 일 수정",
  BACK: "Back",
  ADD: "Add",
  SAVE: "Save",
};

const CalButton = ({ buttonType, operate }) => {
  return (
    <Pressable onPressOut={operate}>
      <View style={styles.buttonView}>
        <Text style={styles.buttonText}>{buttonType}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonView: {
    paddingHorizontal: 16,
    paddingVertical: 5,
    borderRadius: 12,
    backgroundColor: "#745757",
    flexDirection: "column",
    alignItems: "center",
  },
  buttonText: {
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});

CalButton.propTypes = {
  buttonType: PropTypes.oneOf(Object.values(ButtonType)).isRequired,
  operate: PropTypes.func.isRequired,
};

export default CalButton;
