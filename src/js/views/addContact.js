import React, { useContext, useState } from 'react';
import { ContactContext } from '../context/ContactContext';

const AddContact = ({ history }) => {
    const { addContact } = useContext(ContactContext);
    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        phone: '',
        address: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addContact(formData);
        history.push('/');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="full_name" placeholder="Nombre Completo" onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} />
            <input type="text" name="phone" placeholder="Teléfono" onChange={handleChange} />
            <input type="text" name="address" placeholder="Dirección" onChange={handleChange} />
            <button type="submit">Guardar</button>
        </form>
    );
};

export default AddContact;