import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";

const Button = ({ title, onPress }) => {
  return (
    <Pressable onPressOut={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

Button.proptypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#745757",
  },
});

export default Button;
