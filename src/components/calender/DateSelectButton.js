import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";

export const ButtonType = {
  DAY: "DAY",
  DUMY: "DUMY",
};

const DateSelectButton = ({
  buttonType,
  handleDateSelection,
  year,
  month,
  day,
  defaultString,
  firstDayOfWeek,
  now,
}) => {
  const isNow = () => {
    if (year != now.getFullYear()) return false;
    if (month != now.getMonth() + 1) return false;
    if (day != now.getDate()) return false;
    return true;
  };
  const getFontColor = () => {
    return isNow() ? "#FFFFFF" : "#000000";
  };
  return (
    <Pressable
      onPressOut={() => {
        if (buttonType == ButtonType.DAY) handleDateSelection(year, month, day);
      }}
      style={({ pressed }) => [
        {
          backgroundColor: isNow() ? "#D2B48C" : "#FFFFFF",
        },
        pressed && {
          backgroundColor: buttonType == ButtonType.DAY ? "#E1D5C6" : "#FFFFFF",
        },
      ]}
    >
      <View key={day} style={[styles.buttonStyle]}>
        <Text
          style={{
            color: firstDayOfWeek == 0 ? "red" : getFontColor(),
            fontWeight: "bold",
          }}
        >
          {buttonType == ButtonType.DAY ? day : defaultString}
        </Text>
      </View>
    </Pressable>
  );
};

DateSelectButton.propTypes = {
  buttonType: PropTypes.oneOf(Object.values(ButtonType)),
  handleDateSelection: PropTypes.func.isRequired,
  year: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  day: PropTypes.number.isRequired,
  defaultString: PropTypes.string.isRequired,
  firstDayOfWeek: PropTypes.number.isRequired,
  now: PropTypes.instanceOf(Date).isRequired,
};

const styles = StyleSheet.create({
  buttonStyle: {
    width: 54,
    height: 43,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#745757",
  },
});

export default DateSelectButton;
