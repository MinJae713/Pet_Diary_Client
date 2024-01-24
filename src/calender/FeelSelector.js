import React from "react";
import { Pressable, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import PropTypes from "prop-types";

const Feels = {
  DEFAULT: "기분입력",
  VNICE: " 최고! ",
  NICE: "좋아요!",
  SOSO: "그럭저럭",
  BAD: "안좋아요",
  SOBAD: " 최악ㅜ ",
};

const FeelSelector = ({ setFeelCondition, feelsIdx }) => {
  const feelsArr = Object.values(Feels);
  const getLeft = () => {
    // if (isNow()) {

    // }
    return feelsIdx == 0 ? (
      <View style={{ width: 20 }} />
    ) : (
      <Pressable
        hitSlop={4}
        onPressIn={() => {
          setFeelCondition(feelsIdx - 1);
        }}
      >
        <AntDesign name="left" size={20} color="#745757" />
      </Pressable>
    );
  };
  const getRight = () => {
    // if (isNow()) {

    // }
    return feelsIdx == feelsArr.length - 1 ? (
      <View style={{ width: 20 }} />
    ) : (
      <Pressable
        hitSlop={4}
        onPressIn={() => {
          setFeelCondition(feelsIdx + 1);
        }}
      >
        <AntDesign name="right" size={20} color="#745757" />
      </Pressable>
    );
  };

  return (
    <View style={{ flexDirection: "row", marginTop: 5 }}>
      {getLeft()}
      <Text style={{ fontSize: 15, color: "black", fontWeight: "bold" }}>
        {"  "}
        {feelsArr[feelsIdx]}
        {"  "}
      </Text>
      {getRight()}
    </View>
  );
};

FeelSelector.propTypes = {
  setFeelCondition: PropTypes.func.isRequired,
  feelsIdx: PropTypes.number.isRequired,
};

export default FeelSelector;
