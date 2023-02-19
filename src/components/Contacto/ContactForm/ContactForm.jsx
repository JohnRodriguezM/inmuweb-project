import React, { useState } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import "../css/Contacto.css";
import { TextField } from "/src/components/Atoms/TextField/TextField";
import { useDispatch } from "react-redux";
import { add } from "../../Atoms/FormInput/FormSlice";
import { TextArea } from "../../Atoms/TextArea/TextArea";

//*firebase

import {
  initiaValues,
  validationSchema,
  createDataFirestore,
} from "../utils/utils";

export const ContactForm = () => {
  const [confirmMessage, setConfirmMessage] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    //console.log(values);
    createDataFirestore(values).then(() => {
      dispatch(add(values));
      setConfirmMessage(true);
      resetForm();
      setTimeout(() => {
        setConfirmMessage(false);
        setSubmitting(false);
      }, 5000);
    });
  };

  return (
    <Formik
      initialValues={initiaValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="form">
          {confirmMessage && (
            <div className="confirm-message">
              El mensaje se ha enviado exitosamente
            </div>
          )}
          <p className="form-parrafo" id="form-parrafo">
            Nuestro negocio no es vender propiedades, sino ayudar a nuestro
            cliente a tomar la decisión perfecta.
          </p>
          <TextField name="name" placeholder="Nombre" type="text" />
          <TextField name="email" placeholder="Correo" type="email" />
          <TextField name="phone" placeholder="Celular" type="tel" />
          <TextArea label="message" placeholder={"Motivo de la solicitud"} />
          <ErrorMessage className="mensaje" name="message" component="p" />
          <button type="submit" disabled={isSubmitting}>
            Enviar
          </button>
          {confirmMessage && (
            <section className="d-flex justify-content-center mb-1">
              <p className="textExito text-success fw-bold">
                ¡Datos enviados correctamente!
              </p>
            </section>
          )}
        </Form>
      )}
    </Formik>
  );
};
