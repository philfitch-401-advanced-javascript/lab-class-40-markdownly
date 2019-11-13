import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './Navigation.css';
import Tabs from './Tabs';
import { getFiles } from '../../selectors/navigationSelectors';
import { changeActiveDocument } from '../../actions/navigationActions';

const Navigation = ({ files, handleTabSelect }) => {
  return (
    <>
      <div className={styles.Navigation}>
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
  handleTabSelect: PropTypes.func.isRequired
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
