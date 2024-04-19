import React from "react";
const SearchNotes = ({ searchTerm, onSearch }) => {
  return (
    <div>
      <label htmlFor="search">Search Notes:</label>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search notes"
      />
    </div>
  );
};

export default SearchNotes;
