import { useState } from 'react';
import ContactForm from './ContactForm';

const ContactModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleModal}>Contact Us</button>

      {isOpen && (
        <div className="modal">
          <button onClick={toggleModal}>Close</button>
          <ContactForm />
        </div>
      )}
    </div>
  );
};

export default ContactModal;