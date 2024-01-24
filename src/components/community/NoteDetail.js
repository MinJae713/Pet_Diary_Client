import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View, Alert } from "react-native";
import colors from "./misc/colors";
import RoundIconBtn from "./RoundIconBtn";
import { useNotes } from "./contexts/NoteProvider";
import NoteInputModal from "./NoteInputModal";
import propTypes from "prop-types";
import { editNoteForm } from "../../reqForms/Community";
import { deleteNoteAPI, editNoteAPI } from "../../api/Community";

const formatDate = (ms) => {
  const date = new Date(ms);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hrs = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();

  return `${day}/${month}/${year} - ${hrs}:${min}:${sec}`;
};

const NoteDetail = ({ navigation, route }) => {
  let client = route.params.client;
  let screenTitle = route.params.screenTitle;
  const [note, setNote] = useState(route.params.note);
  const { setNotes } = useNotes();
  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const displayDeleteAlert = () => {
    Alert.alert(
      "주의",
      "게시글이 삭제됩니다.",
      [
        {
          text: "삭제",
          onPress: deleteNote_WithServer,
        },
        {
          text: "취소",
          onPress: () => console.log("삭제 취소됨"),
        },
      ],
      {
        cancelable: true,
      }
    );
  };
  const deleteNote_WithServer = async () => {
    const response = await deleteNoteAPI(note.id, client.id);
    const resData = response.data;
    if (resData.success) {
      setNotes(resData.content);
      navigation.goBack();
    }
  };
  const editNote_WithServer = async (title, desc, time) => {
    const newNote = editNoteForm(
      note.id,
      title,
      desc,
      time,
      client,
      screenTitle
    );
    const response = await editNoteAPI(newNote);
    const resData = response.data;
    if (resData.success) {
      setNote(newNote);
      setNotes(resData.content);
    }
    return {
      success: resData.success,
      message: resData.message,
    };
  };
  const handleOnClose = () => setShowModal(false);

  const openEditModal = () => {
    setIsEdit(true);
    setShowModal(true);
  };
  return (
    <>
      <ScrollView contentContainerStyle={[styles.container]}>
        <Text style={styles.time}>
          {note.updated
            ? `수정일 ${formatDate(note.time)}`
            : `작성일 ${formatDate(note.time)}`}
        </Text>
        <Text style={styles.title}>{note.title}</Text>
        <Text style={styles.desc}>{note.desc}</Text>
      </ScrollView>
      {client.id == note.userId ? (
        <View style={styles.btnContainer}>
          <RoundIconBtn
            antIconName="delete"
            style={{ marginBottom: 15 }}
            onPress={displayDeleteAlert}
          />
          <RoundIconBtn antIconName="edit" onPress={openEditModal} />
        </View>
      ) : null}
      <NoteInputModal
        isEdit={isEdit}
        note={note}
        onClose={handleOnClose}
        onSubmit={editNote_WithServer}
        visible={showModal}
      />
    </>
  );
};

NoteDetail.propTypes = {
  navigation: propTypes.object.isRequired,
  route: propTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 30,
    color: colors.PRIMARY,
    fontWeight: "bold",
  },
  desc: {
    fontSize: 20,
    opacity: 0.6,
  },
  time: {
    textAlign: "right",
    fontSize: 12,
    opacity: 0.5,
  },
  btnContainer: {
    position: "absolute",
    right: 15,
    bottom: 50,
  },
});

export default NoteDetail;
