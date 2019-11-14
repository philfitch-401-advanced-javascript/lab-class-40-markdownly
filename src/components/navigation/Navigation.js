import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './Navigation.css';
import Tabs from './Tabs';
import { getFiles } from '../../selectors/navigationSelectors';
import { changeActiveDocument } from '../../actions/navigationActions';
import AddFile from './AddFile';

const Navigation = ({ files, handleTabSelect, handleClick }) => {
  return (
    <>
      <div className={styles.Navigation}>
        <AddFile handleSubmit={} handleChange={} newFileName={}/>
        <Tabs files={files} handleTabSelect={handleTabSelect}/>
      </div>
    </>
  );
};

Navigation.propTypes = {
  files: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      fileName: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  handleTabSelect: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  files: getFiles(state)
});

const mapDispatchToProps = dispatch => ({
  handleTabSelect({ target }) {
    dispatch(changeActiveDocument(target.name));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);
