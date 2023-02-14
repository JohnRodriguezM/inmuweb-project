import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './css/Contacto.css'
import { TextField } from '/src/components/Atoms/TextField/TextField';
import { useDispatch } from 'react-redux';
import { add } from '../Form/FormSlice';
import {  TextArea } from '../Atoms/TextArea/TextArea';



const initiaValues = {
    name: '',
    email: '',
    phone: '',
    message: '',
}

const validationSchema = Yup.object().shape({
    name: Yup.string().required("El nombre es requerido").min(2, "Nombre muy corto").max(50, "Nombre muy largo"),
    email: Yup.string().email("Ingresa un correo válido").required("El correo es requerido"),
    phone: Yup.string().matches(/^\d{10}$/, 'Culular debe tener 10 dígitos numericos').required("El teléfono es requerido"),
    message: Yup.string().required("El mensaje es requerido").min(7, "El mensaje es muy corto")
  });

const ContactForm = () => {
    const [confirmMessage, setConfirmMessage] = useState(false);
    const dispatch = useDispatch();


    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        console.log(values)
        dispatch(add(values))
        setConfirmMessage(true);
        resetForm();
        setTimeout(() => {
            setConfirmMessage(false);
            setSubmitting(false);
        }, 5000);
    }

    return (
        <Formik
            initialValues={initiaValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <Form className='form'>
                    {confirmMessage && <div className="confirm-message">El mensaje se ha enviado exitosamente</div>}
                    <p className="form-parrafo" id='form-parrafo'>Nuestro negocio no es vender propiedades, sino ayudar a nuestro cliente a tomar la decisión perfecta.</p>
                    <TextField name="name" placeholder="Nombre" type="text" />
                    <TextField name="email" placeholder="Correo" type="email" />
                    <TextField name="phone" placeholder="Celular" type="tel" />
                   
                    <TextArea
                        label = "hola"
                        placeholder={"Motivo de la solicitud"}
                    />
                       {/* <Field type="textarea" name="message" placeholder="Motivo de la solicitud" />*/}
                        <ErrorMessage className="mensaje" name="message" component="p" />
                    
                    <button type="submit" disabled={isSubmitting}>
                        Enviar
                    </button>
                    {confirmMessage && (
                        <section className='d-flex justify-content-center mb-1'>
                            <p className="textExito text-success fw-bold">¡Datos enviados correctamente!</p>
                        </section>
                    )}
                </Form>
            )}

        </Formik>
    );
};

export const Contacto = () => {
    return (
        <section className="contacto" id="contacto">
            <div className="form-container">
                <h2 className="form-title">Contacto</h2>
                <ContactForm />
            </div>
        </section>
    );
};


