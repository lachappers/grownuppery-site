import React from "react";
import "../styles/index.css";

const SearchBar = ({ formSubmit, value, handleSearchKey, clearSearch }) => (
  <div className="top-bar-right">
    <form onSubmit={formSubmit}>
      <input
        type="search"
        placeholder="Search By Category"
        value={value}
        onChange={handleSearchKey}
      />
      {value && <span onClick={clearSearch}>X</span>}
      <button type="button" className="button">
        Search
      </button>
    </form>
  </div>
);
export default SearchBar;
