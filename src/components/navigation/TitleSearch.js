import React from 'react';
import PropTypes from 'prop-types';

const TitleSearch = ({ 
  handleTitleSearch, 
  handleChange, 
  titleSearchTerm, 
  matchingFiles,
  handleSearchSelect }) => {

  const searchResults = matchingFiles.map(file => (
    <option key={file} name="fileToOpen" value={file}>{file}</option>
  ));

  return (
    <>
    <form onSubmit={handleTitleSearch}>
      <input 
        onChange={handleChange}
        name="titleSearchTerm"
        type="text"
        placeholder="File Name"
        value={titleSearchTerm}
        required
      />
      <button>Search</button>
    </form>
    <select
      onChange={handleSearchSelect}
      name="fileToOpen"
      value=""
    >
      {searchResults}
    </select>
    </>
  );
};


TitleSearch.propTypes = {
  handleTitleSearch: PropTypes.func.isRequired, 
  handleChange: PropTypes.func.isRequired, 
  titleSearchTerm: PropTypes.string.isRequired, 
  searchResults: PropTypes.object,
  matchingFiles: PropTypes.array.isRequired,
  handleSearchSelect: PropTypes.func.isRequired
};

export default TitleSearch;
