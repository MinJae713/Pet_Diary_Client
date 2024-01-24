/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React, { createContext, useContext, useState } from "react";
import { getNotesAPI } from "../../../api/Community";

const NoteContext = createContext();
const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const findNotes = async (userId, screenTitle) => {
    const response = await getNotesAPI(userId, screenTitle);
    const resData = response.data;
    if (resData.success) setNotes(resData.content);
  };

  return (
    <NoteContext.Provider value={{ notes, setNotes, findNotes }}>
      {children}
    </NoteContext.Provider>
  );
};

export const useNotes = () => useContext(NoteContext);

export default NoteProvider;
