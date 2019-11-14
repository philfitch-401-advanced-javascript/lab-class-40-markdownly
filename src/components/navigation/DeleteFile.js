import React from 'react';
import PropTypes from 'prop-types';

const DeleteFile = ({ handleDeleteSubmit, handleChange, fileToDelete, listOfFiles }) => {
  const deleteOptions = listOfFiles.map(file => (
    <option key={file} name="fileToDelete" value={file}>{file}</option>
  ));
  return (
    <form onSubmit={handleDeleteSubmit}>
      <select
        onChange={handleChange}
        name="fileToDelete"
        value={fileToDelete}
      >
        {deleteOptions}
      </select>
      <button>delete</button>
    </form>
  );
};

DeleteFile.propTypes = {
  handleDeleteSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  fileToDelete: PropTypes.string.isRequired,
  listOfFiles: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default DeleteFile;
