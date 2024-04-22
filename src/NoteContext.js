import React, { createContext, useState, useContext } from "react";

const NoteContext = createContext();

export const useNoteContext = () => useContext(NoteContext);

export const NoteProvider = ({ children }) => {
  const [noteList, setNotesList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredNotes, setFilteredNotes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [noteToUpdate, setNoteToUpdate] = useState(null);

  return (
    <NoteContext.Provider
      value={{
        noteList,
        setNotesList,
        searchTerm,
        setSearchTerm,
        filteredNotes,
        setFilteredNotes,
        isModalOpen,
        setIsModalOpen,
        noteToUpdate,
        setNoteToUpdate,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};
