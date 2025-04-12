import React from 'react';
import { CKEditor, useCKEditorCloud } from '@ckeditor/ckeditor5-react';
import { ErrorMessage, Field } from 'formik';
import FormikError from './FormikError';

const Ckeditor = ({ className, name, placeholder, label }) => {
  const cloud = useCKEditorCloud({
    version: '45.0.0',
    premium: true
  });

  if (cloud.status === 'error') {
    return <div className='col-12 text-center'>Error!</div>;
  }

  if (cloud.status === 'loading') {
    return <div className='col-12 text-center'>Loading...</div>;
  }

  const {
    ClassicEditor,
    Essentials,
    Paragraph,
    Bold,
    Italic
  } = cloud.CKEditor;

  const { FormatPainter } = cloud.CKEditorPremiumFeatures;

  return (
    <Field>
      {({ form }) => {
        return (
          <div className={`col-12 mb-2 rounded-2 ${className}`}>
            <CKEditor
              editor={ClassicEditor}
              data={form.values[name] || `<p>${label} : ${placeholder}</p>`}
              onReady={editor => { console.log('ready'); }}
              onChange={(event, editor) => {
                const data = editor.getData();
                form.setFieldValue(name, data)

              }}
              onBlur={(event, editor) =>
                form.setFieldTouched(name)
              }
              onFocus={(event, editor) =>
                editor.getData() == `<p>${label} : ${placeholder}</p>` ? editor.setData('') : null
              }
              config={{
                licenseKey: '<YOUR_LICENSE_KEY>',
                plugins: [Essentials, Paragraph, Bold, Italic, FormatPainter],
                toolbar: ['undo', 'redo', '|', 'bold', 'italic', '|', 'formatPainter'],
                ckfinder: { uploadUrl: 'http://127.0.0.1:8000/api/upload' }
              }}
            />
            <div className='mt-2'>
              <ErrorMessage name={name} component={FormikError} />
            </div>
          </div>
        )
      }}
    </Field>
  );
};

export default Ckeditor;
