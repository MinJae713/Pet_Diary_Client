import React from "react";
import { StyleSheet, Text, View } from "react-native";
import propTypes from "prop-types";

const NotSubmitedNote = ({ emptyHeaderContainer, emptyHeader }) => {
  return (
    <View style={[StyleSheet.absoluteFillObject, emptyHeaderContainer]}>
      <Text style={emptyHeader}>게시글이 없어요</Text>
    </View>
  );
};

NotSubmitedNote.propTypes = {
  emptyHeader: propTypes.object.isRequired,
  emptyHeaderContainer: propTypes.object.isRequired,
};

export default NotSubmitedNote;
