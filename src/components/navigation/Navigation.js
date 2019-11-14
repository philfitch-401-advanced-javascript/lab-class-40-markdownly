import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './Navigation.css';
import Tabs from './Tabs';
import { getFiles, getNewFileName } from '../../selectors/navigationSelectors';
import {
  changeActiveDocument,
  setNewFileName,
  createNewFile
} from '../../actions/navigationActions';
import AddFile from './AddFile';
import DeleteFile from './DeleteFile';

const Navigation = ({ files, handleTabSelect, newFileName, handleSubmit, handleChange, handleDeleteSubmit, fileToDelete }) => {
  return (
    <>
      <div className={styles.Navigation}>
        <div className={styles.FileMenu}>
          <AddFile handleSubmit={handleSubmit} handleChange={handleChange} newFileName={newFileName} />
          <DeleteFile handleDeleteSubmit={handleDeleteSubmit} handleChange={handleChange} fileToDelete={fileToDelete} files={files} />
        </div>
        <Tabs files={files} handleTabSelect={handleTabSelect} />
      </div>
    </>
  );
};

Navigation.propTypes = {
  files: PropTypes.object.isRequired,
  handleTabSelect: PropTypes.func.isRequired,
  newFileName: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleDeleteSubmit: PropTypes.func.isRequired,
  fileToDelete: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  files: getFiles(state),
  newFileName: getNewFileName(state)
});

const mapDispatchToProps = dispatch => ({
  handleTabSelect(fileName) {
    dispatch(changeActiveDocument(fileName));
  },
  handleChange({ target }) {
    dispatch(setNewFileName(target.value));
  },
  handleSubmit(event) {
    event.preventDefault();
    dispatch(createNewFile());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);
