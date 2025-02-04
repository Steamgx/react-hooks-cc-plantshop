import React from "react";

const Search = ({ setSearchQuery }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Type a name to search..."
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default Search;
