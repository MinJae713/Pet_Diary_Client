import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export const InputType = {
  NAME: "이름",
  NickName: "닉네임",
  AGE: "나이",
  ID: "ID",
  PW: "PW",
};

const Input = (props) => {
  const getMessage = () => {
    let value = "";
    if (props.inputType == InputType.ID) value = "아이디";
    else if (props.inputType == InputType.PW) value = "비밀번호";
    else if (props.inputType == InputType.NAME) value = "이름";
    else if (props.inputType == InputType.NickName) value = "닉네임";
    else if (props.inputType == InputType.AGE) value = "나이";
    return value + " 입력";
  };
  const getIcon = () => {
    if (props.inputType == InputType.NAME)
      return <MaterialCommunityIcons name="human" size={24} color="black" />;
    else if (props.inputType == InputType.NickName)
      return <FontAwesome5 name="cat" size={24} color="black" />;
    else if (props.inputType == InputType.AGE)
      return <Entypo name="new-message" size={24} color="black" />;
    else if (props.inputType == InputType.ID)
      return <AntDesign name="idcard" size={24} color="black" />;
    else if (props.inputType == InputType.PW)
      return <FontAwesome name="user-secret" size={24} color="black" />;
  };
  return (
    <View style={styles.InputContainer}>
      {getIcon()}
      <View style={{ width: 15 }}></View>
      <TextInput
        ref={props.refInput}
        style={[styles.InputText, { backgroundColor: "white", color: "black" }]}
        onChangeText={(text) => {
          props.operate(text);
        }}
        placeholder={getMessage()}
        keyboardType={
          props.inputType == InputType.AGE ? "number-pad" : "default"
        }
        returnKeyType="done"
        autoCapitalize="none"
        onSubmitEditing={() => props.onSubmit()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  InputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  InputText: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    width: "75%",
    height: 42,
  },
});

Input.propTypes = {
  inputType: PropTypes.oneOf(Object.values(InputType)).isRequired,
  operate: PropTypes.func.isRequired,
  refInput: PropTypes.any.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Input;
