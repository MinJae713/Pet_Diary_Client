import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import propTypes from "prop-types";

const CheckListItem = ({
  textValue,
  id,
  checked,
  writeDate,
  onRemove,
  onToggle,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.todo}>
        <View style={styles.todoText}>
          <TouchableOpacity onPress={onToggle(id, writeDate)}>
            {checked ? (
              <MaterialCommunityIcons
                size={25}
                name="checkbox-marked-circle-outline"
              />
            ) : (
              <MaterialCommunityIcons
                size={25}
                name="checkbox-blank-circle-outline"
              />
            )}
          </TouchableOpacity>
          <Text
            style={[
              styles.text,
              checked ? styles.checkedText : styles.uncheckedText,
            ]}
          >
            {textValue}
          </Text>
        </View>
        <TouchableOpacity onPress={onRemove(id, writeDate)}>
          <MaterialCommunityIcons
            style={styles.todoDelBtn}
            size={30}
            name="delete-outline"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

CheckListItem.propTypes = {
  id: propTypes.string.isRequired,
  writeDate: propTypes.string.isRequired,
  onToggle: propTypes.func.isRequired,
  onRemove: propTypes.func.isRequired,
  checked: propTypes.bool.isRequired,
  textValue: propTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
  },
  todo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 50,
  },
  todoCheckbox: {
    marginRight: 10,
  },
  todoText: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkedText: {
    color: "#bbb",
    textDecorationLine: "line-through",
    marginLeft: 7,
  },
  uncheckedText: {
    color: "#29323c",
    marginLeft: 7,
  },
  todoDelBtn: {
    color: "#777",
    marginRight: 3,
  },
});

export default CheckListItem;
