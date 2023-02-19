import * as Yup from 'yup';
import { getFirestore, collection, addDoc  } from "firebase/firestore";
import { app } from '../../../firebase/firebase';

const db = getFirestore(app);

export const initiaValues = {
  name: '',
  email: '',
  phone: '',
  message: '',
}



export const validationSchema = Yup.object().shape({
  name: Yup.string().required("El nombre es requerido").min(2, "Nombre muy corto").max(50, "Nombre muy largo"),
  email: Yup.string().email("Ingresa un correo válido").required("El correo es requerido"),
  phone: Yup.string().matches(/^\d{10}$/, 'Culular debe tener 10 dígitos numericos').required("El teléfono es requerido"),
  message: Yup.string().min(7, "El mensaje es muy corto")
});

export const createDataFirestore = async ({name, email, phone, message}) => {
  try {
      const docRef = await addDoc(collection(db, "info"), {
        name,
        email,
        phone,
        message
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
}