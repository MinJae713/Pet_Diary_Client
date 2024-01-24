/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import {
  StatusBar,
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { getScreenTitlesAPI } from "../api/Community";

const HomeScreen = ({ navigation }) => {
  // 메인, 서브 스크린 제목도 DB에서 불러오면 좋을텐디
  const [mainScreen, setMainScreen] = useState([]);
  const [subScreen, setSubScreen] = useState([]);
  useEffect(() => {
    screenInfos_WithServer("main");
    screenInfos_WithServer("sub");
    // 연동하면 주석 푸쇼(main, sub 타이틀 가져오는 코드임)
  }, []);
  const screenInfos_WithServer = async (screenType) => {
    const response = await getScreenTitlesAPI(screenType);
    const resData = response.data;
    const infos = [];
    if (resData.success) {
      const resContent = resData.content;
      let idx = 0;
      Object.values(resContent).map((item) => {
        infos[idx] = {
          key: item.key,
          title: item.title + " 게시판",
          iconName: item.iconName,
          onPress: () =>
            navigation.navigate("Screen", {
              screenTitle: item.title,
            }),
        };
        idx++;
      });
    }
    // console.log(infos); - 여기까지 배열 완성되는거 확인
    if (screenType == "main") setMainScreen(infos);
    else if (screenType == "sub") setSubScreen(infos);
  };
  const mainScreenInfos = [
    {
      key: "C1",
      title: "고양이 게시판",
      iconName: "paw",
      onPress: () =>
        navigation.navigate("Screen", {
          screenTitle: "고양이",
        }),
    },
    {
      key: "C2",
      title: "강아지 게시판",
      iconName: "paw",
      onPress: () =>
        navigation.navigate("Screen", {
          screenTitle: "강아지",
        }),
    },
    {
      key: "C3",
      title: "조류 게시판",
      iconName: "paw",
      onPress: () =>
        navigation.navigate("Screen", {
          screenTitle: "조류",
        }),
    },
    {
      key: "C4",
      title: "양서류 게시판",
      iconName: "paw",
      onPress: () =>
        navigation.navigate("Screen", {
          screenTitle: "양서류",
        }),
    },
    {
      key: "C5",
      title: "파충류 게시판",
      iconName: "paw",
      onPress: () =>
        navigation.navigate("Screen", {
          screenTitle: "파충류",
        }),
    },
    {
      key: "C6",
      title: "분양 게시판",
      iconName: "paw",
      onPress: () =>
        navigation.navigate("Screen", {
          screenTitle: "분양",
        }),
    },
    {
      key: "C7",
      title: "의료 정보 게시판",
      iconName: "heart-plus",
      onPress: () =>
        navigation.navigate("Screen", {
          screenTitle: "의료 정보",
        }),
    },
  ];
  const subScreenInfos = [
    {
      key: "C8",
      title: "핫딜 게시판",
      iconName: "cart-heart",
      onPress: () =>
        navigation.navigate("Screen", {
          screenTitle: "핫딜",
        }),
    },
    {
      key: "C9",
      title: "여행 게시판",
      iconName: "wallet-travel",
      onPress: () =>
        navigation.navigate("Screen", {
          screenTitle: "여행",
        }),
    },
    {
      key: "C10",
      title: "취미 게시판",
      iconName: "dice-3",
      onPress: () =>
        navigation.navigate("Screen", {
          screenTitle: "취미",
        }),
    },
    {
      key: "C11",
      title: "음식 게시판",
      iconName: "food",
      onPress: () =>
        navigation.navigate("Screen", {
          screenTitle: "음식",
        }),
    },
    {
      key: "C12",
      title: "중고장터",
      iconName: "cart",
      onPress: () =>
        navigation.navigate("Screen", {
          screenTitle: "중고장터",
        }),
    },
    {
      key: "C13",
      title: "사진 게시판",
      iconName: "format-wrap-square",
      onPress: () =>
        navigation.navigate("Screen", {
          screenTitle: "사진",
        }),
    },
    {
      key: "C14",
      title: "일상 게시판",
      iconName: "campfire",
      onPress: () =>
        navigation.navigate("Screen", {
          screenTitle: "일상",
        }),
    },
  ];
  const mainScreenSelect = Object.values(mainScreen).map((item) => (
    <TouchableOpacity
      key={item.key}
      activeOpacity={0.8}
      style={styles.button}
      onPress={item.onPress}
    >
      <MaterialCommunityIcons name={item.iconName} size={24} color="#745454" />
      <Text style={styles.board}>{item.title}</Text>
    </TouchableOpacity>
  ));
  const subScreenSelect = Object.values(subScreen).map((item) => (
    <TouchableOpacity
      key={item.key}
      activeOpacity={0.8}
      style={styles.button}
      onPress={item.onPress}
    >
      <MaterialCommunityIcons name={item.iconName} size={24} color="#745454" />
      <Text style={styles.board}>{item.title}</Text>
    </TouchableOpacity>
  ));
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView style={styles.container}>
          <View style={styles.boardContainer}>
            <Text style={styles.title}>메인 게시판</Text>
            {mainScreenSelect}
          </View>
          <View style={styles.boardContainer}>
            <Text style={styles.title}>기타 게시판</Text>
            {subScreenSelect}
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  button: {
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  board: {
    fontSize: 12,
    margin: 5,
    marginLeft: 12,
  },
  boardContainer: {
    margin: 10,
    borderRadius: 10,
    alignItems: "left",
    justifyContent: "top",
    backgroundColor: "#FAFAFA",
    borderWidth: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default HomeScreen;
