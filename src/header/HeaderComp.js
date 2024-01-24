/* eslint-disable react/prop-types */
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const HeaderComp = ({ navigation, title }) => {
  return (
    <View style={styles.header}>
      <View style={{ flex: 1 }} />
      <View style={styles.titleView}>
        <Text style={styles.headerTitle}>{title}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Pressable
          onPress={() => {
            navigation.navigate("Login"); // 이게 되네??
          }}
        >
          <View style={styles.logoutView}>
            <Text style={styles.logoutTitle}>Logout</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 30,
    color: "#000000",
    fontWeight: "bold",
  },
  header: {
    height: 65,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 3,
  },
  titleView: {
    flex: 4,
    alignItems: "center",
  },
  logoutView: {
    width: 63,
    borderRadius: 12,
    backgroundColor: "#D2B48C",
    alignItems: "center",
    paddingHorizontal: 3,
    paddingVertical: 5,
  },
  logoutTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});

export default HeaderComp;
