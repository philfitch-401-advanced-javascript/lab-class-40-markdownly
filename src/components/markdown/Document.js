import React from 'react';
import Preview from './Preview';
import Editor from './Editor';
import styles from './Document.css';
// import PropTypes from 'prop-types';
import { /*connect,*/ useSelector, useDispatch } from 'react-redux';
import { getMarkdown } from '../../selectors/navigationSelectors';
import { updateMarkdown } from '../../actions/navigationActions';

export default function Document() {
  const dispatch = useDispatch();
  const markdown = useSelector(state => getMarkdown(state));
  const handleChange = ({ target }) => dispatch(updateMarkdown(target.value));
  return (
    <>
      <div className={styles.Document}>
        <Editor markdown={markdown} updateMarkdown={handleChange} />
        <Preview markdown={markdown} />
      </div>
    </>
  );
}

// const Document = ({
//   markdown,
//   handleChange
// }) => {
//   return (
//     <>
//       <div className={styles.Document}>
//         <Editor markdown={markdown} updateMarkdown={handleChange} />
//         <Preview markdown={markdown} />
//       </div>
//     </>
//   );
// };

// Document.propTypes = {
//   markdown: PropTypes.string.isRequired,
//   handleChange: PropTypes.func.isRequired
// };

// const mapStateToProps = state => ({
//   markdown: getMarkdown(state)
// });

// const mapDispatchToProps = dispatch => ({
//   handleChange({ target }) {
//     dispatch(updateMarkdown(target.value));
//   }
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Document);
