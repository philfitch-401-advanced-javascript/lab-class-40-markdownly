import React from 'react';
import PropTypes from 'prop-types';

const Tabs = ({ files, handleTabSelect }) => {
  const tabElements = Object.keys(files).map(fileName => {
    return (
      <li 
        key={fileName} 
        name={fileName} 
        onClick={() => handleTabSelect(fileName)}>
        {fileName}
      </li>
    );
  });

  return (
    <ul>
      {tabElements}
    </ul>
  );
};

Tabs.propTypes = {
  files: PropTypes.object.isRequired,
  handleTabSelect: PropTypes.func.isRequired
};

export default Tabs;
