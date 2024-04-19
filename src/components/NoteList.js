import React from "react";

function NoteList({ notes, onDeleteNote, onUpdateNote, onEditNote }) {
  const handleNoteClick = (index) => {
    const clickedNote = notes[index];
    onUpdateNote({
      index,
      title: clickedNote.title,
      description: clickedNote.description,
    });
  };

  return (
    <ul>
      {notes.map((note, index) => (
        <li key={index}>
          <div>
            <h3>{note.title}</h3>
            <p>{note.description}</p>
          </div>
          <button onClick={() => onEditNote(index)}>Update Note</button>
          <button onClick={() => onDeleteNote(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default NoteList;
