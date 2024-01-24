/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import LoginInput, { InputType } from "../components/authenticate/LoginInput";
import Button from "../components/authenticate/Button";
import { Entypo } from "@expo/vector-icons";
import { loginForm } from "../reqForms/Authenticate";
import { loginAPI } from "../api/Authenticate";

const Login = ({ navigation }) => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const refId = useRef(null);
  const refPw = useRef(null);
  const idSubmit = () => {
    if (pw.length == 0) refPw.current.focus();
  };
  const pwSubmit = () => {
    // 아무것도 안함(일단)
  };
  const login = async () => {
    const form = loginForm(id, pw);
    const response = await loginAPI(form);
    const resData = response.data;
    if (resData.success) {
      const content = resData.content;
      navigation.navigate("MainTab", {
        membership: {
          id: content.id,
          pw: content.pw,
          name: content.name,
          nickName: content.nickName,
          age: content.age,
        },
      });
    } else {
      alert(resData.message);
      if (id.length == 0) refId.current.focus();
      else if (pw.length == 0) refPw.current.focus();
    }
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.select({ ios: "padding" })}
      >
        <View style={styles.container}>
          <View style={styles.titleView}>
            {/* Header(chile - Text) */}
            <Text style={styles.title}>Paw Plan</Text>
            <View style={{ height: 40 }}></View>
            <Entypo name="baidu" size={80} color="#745757" />
          </View>
          <View style={styles.content}>
            {/* Body(child - Input Id, Input Pw, buttonView) */}
            <LoginInput
              inputType={InputType.ID}
              operate={(text) => setId(text)}
              refInput={refId}
              onSubmit={idSubmit}
            />
            <View style={{ height: 35 }}></View>
            <LoginInput
              inputType={InputType.PW}
              operate={(text) => setPw(text)}
              refInput={refPw}
              onSubmit={pwSubmit}
            />
            <View style={{ height: 50 }}></View>
            <View style={[styles.ButtonView]}>
              <Button
                title="JOIN"
                onPress={() => navigation.navigate("Membership")}
              />
              <Button title="LOGIN" onPress={() => login()} />
            </View>
            <View style={{ height: 80 }} />
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
  },
  titleView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 45,
    fontWeight: "bold",
    color: "#745757",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
  },
  ButtonView: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

export default Login;
