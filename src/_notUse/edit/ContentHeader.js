import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";
import CalButton from "../../components/calender/CalButton";
import { ButtonType } from "../../components/calender/CalButton";

const ContentHeader = ({
  selectedDate,
  addButtonOperate,
  saveButtonOperate,
}) => {
  return (
    <View style={styles.container}>
      {/* 자식 : dateView, feelView, editButtonView */}
      <View style={styles.dateView}>
        <Text style={styles.dateText}>선택 날짜 : {selectedDate}</Text>
      </View>
      <View style={styles.buttonView}>
        <CalButton buttonType={ButtonType.ADD} operate={addButtonOperate} />
        <View style={{ marginRight: 30 }}></View>
        <CalButton buttonType={ButtonType.SAVE} operate={saveButtonOperate} />
      </View>
    </View>
  );
};

ContentHeader.propTypes = {
  selectedDate: PropTypes.string.isRequired,
  addButtonOperate: PropTypes.func.isRequired,
  saveButtonOperate: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
    // backgroundColor: "#745757",
  },
  dateText: {
    color: "#000000",
    fontSize: 15,
    fontWeight: "bold",
  },
  dateView: {
    flex: 1,
  },
  buttonView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default ContentHeader;
