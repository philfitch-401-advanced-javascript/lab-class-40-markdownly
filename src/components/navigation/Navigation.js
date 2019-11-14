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

const Navigation = ({ files, handleTabSelect, newFileName, handleSubmit, handleChange }) => {
  return (
    <>
      <div className={styles.Navigation}>
        <AddFile handleSubmit={handleSubmit} handleChange={handleChange} newFileName={newFileName}/>
        <Tabs files={files} handleTabSelect={handleTabSelect}/>
      </div>
    </>
  );
};

Navigation.propTypes = {
  files: PropTypes.object.isRequired,
  handleTabSelect: PropTypes.func.isRequired,
  newFileName: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

//   PropTypes.shape({
//     id: PropTypes.string,
//     fileName: PropTypes.string.isRequired
//   }).isRequired
// ).isRequired,

const mapStateToProps = state => ({
  files: getFiles(state),
  newFileName: getNewFileName(state)
});

const mapDispatchToProps = dispatch => ({
  handleTabSelect(fileName) {
    console.log(fileName);
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
