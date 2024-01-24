import React from "react";
import { StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "./misc/colors";
import propTypes from "prop-types";

const RoundIconBtn = ({ antIconName, size, color, style, onPress }) => {
  return (
    <AntDesign
      name={antIconName}
      size={size || 32}
      color={color || colors.DARK}
      style={[styles.icon, { ...style }]}
      onPress={onPress}
    />
  );
};

RoundIconBtn.propTypes = {
  antIconName: propTypes.string.isRequired,
  size: propTypes.number,
  color: propTypes.string,
  style: propTypes.object,
  onPress: propTypes.func.isRequired,
};

const styles = StyleSheet.create({
  icon: {
    padding: 15,
    borderRadius: 50,
    elevation: 5,
  },
});

export default RoundIconBtn;
