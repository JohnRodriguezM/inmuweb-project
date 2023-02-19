import { ContactForm } from './ContactForm/ContactForm';
import "./css/Contacto.css";
export const ContactLoad = () => {
  return (
    <section className="contacto" id="contacto">
      <div className="form-container">
        <h2 className="form-title">Contacto</h2>
        <ContactForm />
      </div>
    </section>
  );
};
