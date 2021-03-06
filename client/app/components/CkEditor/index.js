/**
 *
 * Breadcrumb
 *
 */

import PropTypes from 'prop-types';
import React from 'react';
import CKEditor from 'react-ckeditor-component';
import { withRouter } from 'react-router-dom';

const CkEditor = props => {
  const { description, setOneValue, is_body } = props;
  const handleEditorChange = (e, name) => {
    const title = is_body ? 'body' : name;
    const newContent = e.editor.getData();
    setOneValue({ key: title, value: newContent });
  };
  return (
    <div className="flex-1">
      <CKEditor
        name="description"
        content={description}
        config={{
          allowedContent: true,
          image_previewText: ' ',
          filebrowserBrowseUrl: '/editor-file-select',
          filebrowserUploadUrl: '/api/media/multiple',
        }}
        events={{
          change: e => handleEditorChange(e, 'description'),
          value: description,
        }}
      />
    </div>
  );
};

CkEditor.propTypes = {
  description: PropTypes.string,
  setOneValue: PropTypes.func,
};

CkEditor.defaultProps = { description: 'description' };

export default withRouter(CkEditor);
