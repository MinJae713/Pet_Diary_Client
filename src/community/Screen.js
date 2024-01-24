/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
} from "react-native";
import Note from "../components/community/Note";
import NoteInputModal from "../components/community/NoteInputModal";
import NotFound from "../components/community/NotFound";
import RoundIconBtn from "../components/community/RoundIconBtn";
import SearchBar from "../components/community/SearchBar";
import { useNotes } from "../components/community/contexts/NoteProvider";
import colors from "../components/community/misc/colors";
import NotSubmitedNote from "../components/community/NotSubmitedNote";
import { submitNoteForm } from "../reqForms/Community";
import { submitNoteAPI, getNotesAPI } from "../api/Community";

const reverseData = (data) => {
  return data.sort((a, b) => {
    const aInt = parseInt(a.time);
    const bInt = parseInt(b.time);
    if (aInt < bInt) return 1;
    if (aInt == bInt) return 0;
    if (aInt > bInt) return -1;
  });
};

const Screen = ({ navigation, route }) => {
  let screenTitle = route.params.screenTitle; // 게시판명
  let client = route.params.user; // 고객 정보
  const [modalVisible, setModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [resultNotFound, setResultNotFound] = useState(false);

  const { notes, setNotes, findNotes } = useNotes();

  useEffect(() => {
    navigation.setOptions({ title: screenTitle + " 게시판" });
    initialNotes();
  }, [navigation]);

  const initialNotes = async () => {
    const response = await getNotesAPI(client.id, screenTitle);
    const resData = response.data;
    if (resData.success) setNotes(resData.content);
  };

  const handleOnSubmit = async (title, desc) => {
    const form = submitNoteForm(title, desc, screenTitle, client);
    const response = await submitNoteAPI(form);
    const resData = response.data;
    if (resData.success) setNotes(resData.content);
    return {
      success: resData.success,
      message: resData.message,
    };
  };

  const openNote = (note) => {
    navigation.navigate("NoteDetail", { note, client, screenTitle });
  };

  const filterNote = (note, text) => {
    if (note.title.toLowerCase().includes(text.toLowerCase())) return note;
  };

  const handleOnSearchInput = async (text) => {
    setSearchQuery(text);
    if (!text.trim()) return await handleOnClear();
    const filteredNotes = notes.filter((note) => filterNote(note, text));
    if (filteredNotes.length) {
      setNotes([...filteredNotes]);
      setResultNotFound(false);
    } else setResultNotFound(true);
  };

  const handleOnClear = async () => {
    setSearchQuery("");
    setResultNotFound(false);
    return await findNotes(client.id, screenTitle);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={colors.LIGHT} />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          {!notes.length ? (
            // 게시물이 하나도 없으면 표시
            <NotSubmitedNote
              emptyHeader={styles.emptyHeader}
              emptyHeaderContainer={styles.emptyHeaderContainer}
            />
          ) : (
            // 하나라도 있으면 검색바 표시
            <SearchBar
              value={searchQuery}
              onChangeText={handleOnSearchInput}
              containerStyle={{ marginVertical: 15 }}
              onClear={handleOnClear}
            />
          )}

          {resultNotFound ? (
            // 게시물 검색 여부에 따라 표시
            <NotFound />
          ) : (
            <FlatList
              data={reverseData(notes)}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <Note onPress={() => openNote(item)} item={item} />
              )}
            />
          )}
        </View>
      </TouchableWithoutFeedback>
      <RoundIconBtn
        onPress={() => setModalVisible(true)}
        antIconName="edit"
        style={styles.addBtn}
      />
      <NoteInputModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSubmit={handleOnSubmit}
      />
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 25,
    fontWeight: "bold",
    color: colors.PRIMARY,
  },
  container: {
    paddingHorizontal: 20,
    flex: 1,
    zIndex: 1,
  },
  emptyHeader: {
    fontSize: 30,
    fontWeight: "bold",
    opacity: 0.2,
  },
  emptyHeaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    zIndex: -1,
  },
  addBtn: {
    position: "absolute",
    right: 15,
    bottom: 50,
    zIndex: 1,
    color: colors.PRIMARY,
  },
});

export default Screen;
