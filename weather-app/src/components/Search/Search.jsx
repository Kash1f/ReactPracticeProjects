import React from "react";


const Search = ({ search, setSearch, submitSearch}) => {
  return (
    <div className="search-engine">
      <input
        type="text"
        placeholder="Enter your city"
        name="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button onClick={submitSearch}>Search Weather</button>
    </div>
  );
};

export default Search;
