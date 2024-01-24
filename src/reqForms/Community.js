import uuid from "react-uuid";

export const submitNoteForm = (title, desc, screenTitle, client) => {
  return {
    id: uuid(),
    title,
    desc,
    time: Date.now(),
    screenTitle,
    updated: false,
    userId: client.id,
  };
};

export const editNoteForm = (id, title, desc, time, client, screenTitle) => {
  return {
    id,
    title,
    updated: true,
    desc,
    time,
    screenTitle,
    userId: client.id,
  };
};
