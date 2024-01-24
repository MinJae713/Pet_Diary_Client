/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Modal,
  StatusBar,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
} from "react-native";
import colors from "./misc/colors";
import RoundIconBtn from "./RoundIconBtn";
import propTypes from "prop-types";

const NoteInputModal = ({ visible, onClose, onSubmit, note, isEdit }) => {
  const [title, setTitle] = useState(""); // 제목 표시
  const [desc, setDesc] = useState(""); // 내용 표시
  const handleModalClose = () => {
    Keyboard.dismiss();
  };

  useEffect(() => {
    if (isEdit) {
      setTitle(note.title);
      setDesc(note.desc);
    }
  }, [isEdit]);

  const contentInitialize = () => {
    setTitle("");
    setDesc("");
  };

  const handleSubmit = async () => {
    let submitResult = {};
    if (isEdit) submitResult = await onSubmit(title, desc, Date.now());
    else submitResult = await onSubmit(title, desc);
    const submitSuccess = submitResult.success;
    if (submitSuccess) {
      if (!isEdit) contentInitialize();
      onClose();
    } else alert(submitResult.message);
  };

  const closeModal = () => {
    if (!isEdit) {
      setTitle("");
      setDesc("");
    }
    onClose();
  };

  return (
    <>
      <StatusBar hidden></StatusBar>
      <Modal visible={visible} animationType="fade">
        <SafeAreaView style={{ margin: 10 }}>
          <TextInput
            value={title}
            onChangeText={(text) => setTitle(text)}
            placeholder="제목"
            placeholderTextColor="#C7C7C7"
            style={[styles.input, styles.title]}
          />
          <TextInput
            value={desc}
            multiline
            placeholder="내용"
            placeholderTextColor="#C7C7C7"
            style={[styles.input, styles.desc]}
            onChangeText={(text) => setDesc(text)}
          />
          <View style={styles.btnContainer}>
            <RoundIconBtn
              size={15}
              antIconName="check"
              onPress={handleSubmit}
            />
            <RoundIconBtn
              size={15}
              style={{ marginLeft: 15 }}
              antIconName="close"
              onPress={closeModal}
            />
          </View>
        </SafeAreaView>
        <TouchableWithoutFeedback onPress={handleModalClose}>
          <View style={[styles.modalBG, StyleSheet.absoluteFillObject]} />
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

NoteInputModal.propTypes = {
  visible: propTypes.bool.isRequired,
  onClose: propTypes.func,
  onSubmit: propTypes.func,
  note: propTypes.object,
  isEdit: propTypes.bool,
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 15,
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: colors.PRIMARY,
    fontSize: 20,
    color: colors.DARK,
  },
  title: {
    height: 40,
    marginBottom: 15,
    fontWeight: "bold",
  },
  desc: {
    height: 100,
  },
  modalBG: {
    flex: 1,
    zIndex: -1,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 15,
  },
});

export default NoteInputModal;
