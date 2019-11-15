import React from 'react';
import PropTypes from 'prop-types';



const TitleSearch = ({ 
  handleTitleSearch, 
  handleChange, 
  titleSearchTerm, 
  fileToOpen,
  matchingFiles }) => {

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
      onChange={handleChange}
      name="titleSearchResults"
      value={fileToOpen}
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
  fileToOpen: PropTypes.string.isRequired,
  searchResults: PropTypes.object,
  matchingFiles: PropTypes.array.isRequired,

};

export default TitleSearch;
