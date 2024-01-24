import React from "react";
import {
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  View,
} from "react-native";
import colors from "./misc/colors";
import propTypes from "prop-types";

const Note = ({ item, onPress }) => {
  const { title, desc, nickname } = item;
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
        <Text numberOfLines={3}>{desc}</Text>
      </View>
      <View style={styles.auther}>
        <Text>작성자 : {nickname}</Text>
      </View>
    </TouchableOpacity>
  );
};

const width = Dimensions.get("window").width - 40;

Note.propTypes = {
  item: propTypes.object.isRequired,
  onPress: propTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    // width: width / 2 - 10,
    width: width,
    padding: 8,
    flexDirection: "row",
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    color: colors.DARK,
  },
  content: {
    flex: 1,
  },
  auther: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
  },
});

export default Note;
