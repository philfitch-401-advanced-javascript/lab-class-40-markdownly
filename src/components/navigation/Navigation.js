import React from 'react';
// import PropTypes from 'prop-types';
import { /*connect,*/ useDispatch, useSelector } from 'react-redux';
import styles from './Navigation.css';
import Tabs from './Tabs';
import { 
  getFiles, 
  getNewFileName, 
  getFileToDelete,
  getTitleSearchTerm,
  getMatchingFiles 
} from '../../selectors/navigationSelectors';
import {
  changeActiveDocument,
  setNewFileName,
  setFileToDelete,
  createNewFile,
  deleteFile,
  searchFiles,
  setTitleSearchTerm,
  setFileToOpen
} from '../../actions/navigationActions';
import AddFile from './AddFile';
import DeleteFile from './DeleteFile';
import TitleSearch from './TitleSearch';

export default function Navigation() {
  const dispatch = useDispatch();

  const files = useSelector(state => getFiles(state));
  const fileToDelete = useSelector(state => getFileToDelete(state));
  const matchingFiles = useSelector(state => getMatchingFiles(state));
  const newFileName = useSelector(state => getNewFileName(state));
  const titleSearchTerm = useSelector(state => getTitleSearchTerm(state));

  const handleChange = ({ target }) => {
    if(target.name === 'fileName') dispatch(setNewFileName(target.value));
    if(target.name === 'fileToDelete') dispatch(setFileToDelete(target.value));
    if(target.name === 'titleSearchTerm') dispatch(setTitleSearchTerm(target.value));
    if(target.name === 'fileToOpen') dispatch(setFileToOpen(target.value));
  };
  const handleDeleteSubmit = event => {
    event.preventDefault();
    dispatch(deleteFile());
  };
  const handleSearchSelect = ({ target }) => {
    dispatch(changeActiveDocument(target.value));
  };
  const handleSubmit = event => {
    event.preventDefault();
    dispatch(createNewFile());
  };
  const handleTabSelect = fileName => {
    dispatch(changeActiveDocument(fileName));
  };
  const handleTitleSearch = event => {
    event.preventDefault();
    dispatch(searchFiles());
  };

  return (
    <>
      <div className={styles.Navigation}>
        <div className={styles.FileMenu}>
          <AddFile 
            handleSubmit={handleSubmit} 
            handleChange={handleChange} 
            newFileName={newFileName} />
          <DeleteFile 
            handleDeleteSubmit={handleDeleteSubmit} 
            handleChange={handleChange} 
            fileToDelete={fileToDelete} 
            files={files} />
          <TitleSearch 
            handleTitleSearch={handleTitleSearch} 
            handleChange={handleChange} 
            titleSearchTerm={titleSearchTerm} 
            matchingFiles={matchingFiles} 
            handleSearchSelect={handleSearchSelect}
          />
        </div>
        <Tabs files={files} handleTabSelect={handleTabSelect} />
      </div>
    </>
  );
}

// const Navigation = ({ 
//   files, 
//   handleTabSelect, 
//   newFileName, 
//   handleSubmit, 
//   handleChange, 
//   handleDeleteSubmit, 
//   fileToDelete, 
//   handleTitleSearch, 
//   titleSearchTerm, 
//   matchingFiles,
//   handleSearchSelect }) => {
  
//   return (
//     <>
//       <div className={styles.Navigation}>
//         <div className={styles.FileMenu}>
//           <AddFile 
//             handleSubmit={handleSubmit} 
//             handleChange={handleChange} 
//             newFileName={newFileName} />
//           <DeleteFile 
//             handleDeleteSubmit={handleDeleteSubmit} 
//             handleChange={handleChange} 
//             fileToDelete={fileToDelete} 
//             files={files} />
//           <TitleSearch 
//             handleTitleSearch={handleTitleSearch} 
//             handleChange={handleChange} 
//             titleSearchTerm={titleSearchTerm} 
//             matchingFiles={matchingFiles} 
//             handleSearchSelect={handleSearchSelect}
//           />
//         </div>
//         <Tabs files={files} handleTabSelect={handleTabSelect} />
//       </div>
//     </>
//   );
// };

// Navigation.propTypes = {
//   files: PropTypes.object.isRequired,
//   handleTabSelect: PropTypes.func.isRequired,
//   newFileName: PropTypes.string.isRequired,
//   handleChange: PropTypes.func.isRequired,
//   handleSubmit: PropTypes.func.isRequired,
//   handleDeleteSubmit: PropTypes.func.isRequired,
//   fileToDelete: PropTypes.string.isRequired,
//   handleTitleSearch: PropTypes.func.isRequired,
//   titleSearchTerm: PropTypes.string.isRequired,
//   matchingFiles: PropTypes.array.isRequired,
//   handleSearchSelect: PropTypes.func.isRequired,
// };

// const mapStateToProps = state => ({
//   files: getFiles(state),
//   newFileName: getNewFileName(state),
//   fileToDelete: getFileToDelete(state),
//   titleSearchTerm: getTitleSearchTerm(state),
//   fileToOpen: getFileToOpen(state),
//   matchingFiles: getMatchingFiles(state)
// });

// const mapDispatchToProps = dispatch => ({
//   handleTabSelect(fileName) {
//     dispatch(changeActiveDocument(fileName));
//   },
//   handleChange({ target }) {
//     if(target.name === 'fileName') dispatch(setNewFileName(target.value));
//     if(target.name === 'fileToDelete') dispatch(setFileToDelete(target.value));
//     if(target.name === 'titleSearchTerm') dispatch(setTitleSearchTerm(target.value));
//     if(target.name === 'fileToOpen') dispatch(setFileToOpen(target.value));
//   },
//   handleSubmit(event) {
//     event.preventDefault();
//     dispatch(createNewFile());
//   },
//   handleDeleteSubmit(event) {
//     event.preventDefault();
//     dispatch(deleteFile());
//   },
//   handleTitleSearch(event) {
//     event.preventDefault();
//     dispatch(searchFiles());
//   },
//   handleSearchSelect({ target }) {
//     dispatch(changeActiveDocument(target.value));
//   }
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Navigation);
