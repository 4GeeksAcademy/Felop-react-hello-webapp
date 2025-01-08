import React, { useState,useRef, useContext, useEffect } from 'react';
import { Context } from '../store/appContext';
import CardContact from '../components/ContactCard';

const Contacts = () => {
    const { contacts, fetchContacts } = useContext(ContactContext);

    useEffect(() => {
        fetchContacts();
    }, []);

    return (
        <div>
            <h1>Lista de Contactos</h1>
            {contacts.map((contact) => (
                <ContactCard key={contact.id} contact={contact} />
            ))}
        </div>
    );
};

export default Contacts;