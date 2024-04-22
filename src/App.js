import React from "react";
import "./App.css";
import NoteBookForm from "./components/NoteBookForm";
import NoteList from "./components/NoteList";
import SearchNotes from "./components/SearchNotes";
import Modal from "./components/Modal";
import { NoteProvider, useNoteContext } from "./NoteContext";

function App() {
  return (
    <NoteProvider>
      <AppContent />
    </NoteProvider>
  );
}

function AppContent() {
  const {
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
  } = useNoteContext();

  React.useEffect(() => {
    setFilteredNotes(
      noteList.filter((note) =>
        note.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, noteList, setFilteredNotes]);

  const handleAddNote = (note) => {
    setNotesList([...noteList, note]);
    setIsModalOpen(false);
  };

  const handleDeleteNote = (index) => {
    setNotesList(noteList.filter((_, i) => i !== index));
  };

  const handleUpdateNote = (updatedNote) => {
    const updatedList = [...noteList];
    updatedList[noteToUpdate.index] = updatedNote;
    setNotesList(updatedList);
    setNoteToUpdate(null);
    setIsModalOpen(false);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleEditNote = (index) => {
    const note = noteList[index];
    setNoteToUpdate({
      index,
      title: note.title,
      description: note.description,
    });
    setIsModalOpen(true);
  };

  return (
    <div className="container">
      <div className="center">
        <h1>Notebook</h1>
        <p>Total Notes: {noteList.length}</p>
        <p>Showing : {searchTerm ? filteredNotes.length : noteList.length}</p>
      </div>

      <SearchNotes searchTerm={searchTerm} onSearch={setSearchTerm} />

      <button onClick={handleOpenModal}>Add New Note</button>

      <NoteList
        notes={filteredNotes} // Pass filteredNotes to NoteList
        onDeleteNote={handleDeleteNote}
        onEditNote={handleEditNote}
      />

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <NoteBookForm
            onAddNote={handleAddNote}
            onUpdateNote={handleUpdateNote}
            noteToUpdate={noteToUpdate}
            onClose={() => setIsModalOpen(false)}
          />
        </Modal>
      )}
    </div>
  );
}

export default App;

