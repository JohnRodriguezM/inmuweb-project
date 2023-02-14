import React from 'react';

import { ErrorMessage, Field } from 'formik';

export const FormInput = ({ label, name, type, placeHolder, required }) => (
  <div className="form-group">
    <label htmlFor={name} className="form-label">
      {label}
    </label>
    <Field
      className="form-input"
      id={name}
      type={type}
      name={name}
      placeholder={placeHolder}
    />
  </div>
);


