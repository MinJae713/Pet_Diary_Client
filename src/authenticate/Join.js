/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { Fragment, useRef, useState } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
} from "react-native";
import JoinInput, { InputType } from "../components/authenticate/JoinInput";
import Button from "../components/authenticate/Button";
import { Entypo } from "@expo/vector-icons";
import { joinAPI } from "../api/Authenticate";
import { joinForm } from "../reqForms/Authenticate";

const Membership = ({ navigation }) => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [name, setName] = useState("");
  const [nickName, setNickName] = useState("");
  const [age, setAge] = useState(-1);
  const refId = useRef(null);
  const refPw = useRef(null);
  const refName = useRef(null);
  const refNickName = useRef(null);
  const refAge = useRef(null);

  const nameSubmit = () => {
    if (nickName.length == 0) refNickName.current.focus();
  };
  const nickNameSubmit = () => {
    if (age == -1) refAge.current.focus();
  };
  const ageSubmit = () => {
    if (id.length == 0) refId.current.focus();
  };
  const idSubmit = () => {
    if (pw.length == 0) refPw.current.focus();
  };
  const pwSubmit = () => {
    // 아무것도 안함(일단)
  };

  const checkIntegral = () => {
    // 위 메소드들 하나로 통합
    if (name.length == 0) {
      alert("이름이 입력되지 않았습니다.");
      return false;
    } else if (nickName.length == 0) {
      alert("닉네임이 입력되지 않았습니다.");
      return false;
    } else if (age == -1) {
      alert("나이가 입력되지 않았습니다.");
      return false;
    } else if (id.length == 0) {
      alert("아이디가 입력되지 않았습니다.");
      return false;
    } else if (pw.length == 0) {
      alert("비밀번호가 입력되지 않았습니다.");
      return false;
    } else return true;
  };
  const createNewMembership = async () => {
    if (!checkIntegral()) return;
    else {
      const form = joinForm(id, pw, name, nickName, age);
      const response = await joinAPI(form);
      const resData = response.data;
      console.log(resData);
      alert(resData.message);
      if (resData.success) navigation.navigate("Login");
    }
  };
  const setAgeOperate = (text) => {
    if (text.length == 0) setAge(-1);
    else setAge(text);
  };
  const joinInputInfos = [
    {
      id: "name",
      inputType: InputType.NAME,
      operate: setName,
      refInput: refName,
      onSubmit: nameSubmit,
      height: 10,
    },
    {
      id: "nickname",
      inputType: InputType.NickName,
      operate: setNickName,
      refInput: refNickName,
      onSubmit: nickNameSubmit,
      height: 10,
    },
    {
      id: "age",
      inputType: InputType.AGE,
      operate: setAgeOperate,
      refInput: refAge,
      onSubmit: ageSubmit,
      height: 10,
    },
    {
      id: "id",
      inputType: InputType.ID,
      operate: setId,
      refInput: refId,
      onSubmit: idSubmit,
      height: 10,
    },
    {
      id: "pw",
      inputType: InputType.PW,
      operate: setPw,
      refInput: refPw,
      onSubmit: pwSubmit,
      height: 60,
    },
  ];
  const joinInputs = Object.values(joinInputInfos).map((item) => (
    <Fragment key={item.id}>
      <JoinInput
        inputType={item.inputType}
        operate={(text) => {
          item.operate(text);
        }}
        refInput={item.refInput}
        onSubmit={item.onSubmit}
      />
      <View style={{ height: item.height }} />
    </Fragment>
  ));

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.titleView}>
          {/* Header(chile - Text) */}
          <Text style={styles.title}>Paw Plan</Text>
          <View style={{ height: 15 }}></View>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>회원가입</Text>
        </View>
        <View style={styles.content}>
          {joinInputs}
          <Entypo name="emoji-happy" size={140} color="black" />
        </View>
        <View style={styles.footer}>
          {/* Footer(chile - Button, Button) */}
          <Button title="BACK" onPress={() => navigation.navigate("Login")} />
          <Button title="JOIN" onPress={() => createNewMembership()} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    backgroundColor: "#D2B48C",
  },
  styledText: {
    fontSize: 30,
  },
  titleView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#745757",
  },
  content: {
    flex: 3,
    alignItems: "center",
  },
  footer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default Membership;
