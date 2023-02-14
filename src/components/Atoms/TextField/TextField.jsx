import { ErrorMessage, Field } from 'formik';

export const TextField = ({ name, placeholder, type }) => {
  return (
    <div className="form-group">
      <Field type={type} name={name} placeholder={placeholder} />
      <ErrorMessage className="mensaje" name={name} component="p" />
    </div>
  );
};