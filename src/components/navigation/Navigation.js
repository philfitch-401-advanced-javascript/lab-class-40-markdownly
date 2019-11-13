import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './Navigation.css';
import Tabs from './Tabs';

const Navigation = ({ files, selectActiveFile, addFile, getFiles, changeActiveDocument }) => {
  return (
    <>
      <div className={styles.Navigation}>
        <Tabs files={getFiles} handleTabSelect={changeActiveDocument}/>
      </div>
    </>
  );
};

Document.propTypes = {
  
};

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = dispatch => ({
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);
