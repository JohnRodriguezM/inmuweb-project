import { ErrorMessage, Field } from 'formik';

export const TextArea = ({ label, placeholder }) => (
  <div className="form-group">
    <Field
      as="textarea"
      className="form-textarea"
      id={label}
      name={label}
      placeholder={placeholder}
    />
   
  </div>
);

