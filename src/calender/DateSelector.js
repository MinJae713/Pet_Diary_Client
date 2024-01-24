import React from "react";
import PropTypes from "prop-types";
import { Pressable, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export const SelectTypes = {
  YEAR: "년 ",
  MONTH: "월  ",
};

const DateSelector = ({ selectorType, operate, dateValue }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Pressable onPressOut={() => operate(dateValue - 1)} hitSlop={4}>
        <AntDesign name="left" size={20} color="black" />
      </Pressable>
      <Text style={{ fontSize: 15, color: "black", fontWeight: "bold" }}>
        {"  "}
        {dateValue}
        {selectorType}
      </Text>
      <Pressable onPressOut={() => operate(dateValue + 1)} hitSlop={4}>
        <AntDesign name="right" size={20} color="black" />
      </Pressable>
    </View>
  );
};

DateSelector.propTypes = {
  selectorType: PropTypes.oneOf(Object.values(SelectTypes)).isRequired,
  operate: PropTypes.func.isRequired,
  dateValue: PropTypes.number.isRequired,
};

export default DateSelector;
