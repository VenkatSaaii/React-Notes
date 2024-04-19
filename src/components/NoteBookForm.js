// src/components/NoteBookForm.js
import React, { useState, useEffect } from "react";

function NoteBookForm({ onAddNote, onUpdateNote, noteToUpdate, onClose }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isUpdateMode, setIsUpdateMode] = useState(false);

  useEffect(() => {
    if (noteToUpdate) {
      setTitle(noteToUpdate.title);
      setDescription(noteToUpdate.description);
      setIsUpdateMode(true);
    } else {
      setTitle("");
      setDescription("");
      setIsUpdateMode(false);
    }
  }, [noteToUpdate]);

  const handleNoteAction = () => {
    if (isUpdateMode) {
      onUpdateNote({
        index: noteToUpdate.index,
        title,
        description,
      });
    } else {
      onAddNote({
        title,
        description,
      });
    }
    setTitle("");
    setDescription("");
  };

  return (
    <div>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter title"
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter description"
          rows={6}
          cols={30}
        />
      </div>
      <button onClick={handleNoteAction}>
        {isUpdateMode ? "Update Note" : "Add to Notebook"}
      </button>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default NoteBookForm;
