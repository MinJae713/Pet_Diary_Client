import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "./misc/colors";
import propTypes from "prop-types";

const SearchBar = ({ containerStyle, value, onClear, onChangeText }) => {
  return (
    <View style={[styles.container, { ...containerStyle }]}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.searchBar}
        placeholder="게시글 검색"
      />
      {value ? (
        <AntDesign
          name="close"
          size={20}
          color={colors.PRIMARY}
          onPress={onClear}
          style={styles.clearIcon}
        />
      ) : null}
    </View>
  );
};

SearchBar.propTypes = {
  containerStyle: propTypes.object,
  value: propTypes.string,
  onClear: propTypes.func,
  onChangeText: propTypes.func,
};

const styles = StyleSheet.create({
  searchBar: {
    borderWidth: 0.5,
    borderColor: colors.PRIMARY,
    height: 40,
    borderRadius: 40,
    paddingLeft: 15,
    fontSize: 20,
  },
  container: {
    justifyContent: "center",
  },
  clearIcon: {
    position: "absolute",
    right: 10,
  },
});

export default SearchBar;
