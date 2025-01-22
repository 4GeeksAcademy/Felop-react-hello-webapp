import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Context } from "../store/appContext.js";

const EditContact = () => {
    const { store, actions } = useContext(Context)
    const navigate = useNavigate();
    const {id}=useParams();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    useEffect(() => {
        // Buscar los datos del contacto por 'id'
        const contact = store.listContacts.find(contact => contact.id===parseInt(id));
        if (contact) {
            setName(contact.name);
            setEmail(contact.email);
            setPhone(contact.phone);
            setAddress(contact.address);
        }
    }, [id, store.listContacts]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedContact = { 
            id:parseInt(id),
             name,
              email,
               phone,
                address 
            };
        await actions.editContact(id, updatedContact); // Asegúrate de que editContact esté implementado correctamente
        navigate("/"); // Redirigir a la lista de contactos después de la actualización
    };


    return (

        <div className="container">
            <h1 className="text-center">Update Contact</h1>

            <form className="container" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput1" className="form-label">Full Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput1"
                        placeholder="Full name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">Email</label>
                    <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput2"
                        placeholder="Enter email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput3" className="form-label">Phone</label>
                    <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput3"
                        placeholder="Enter phone"
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput4" className="form-label">Address</label>
                    <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput4"
                        placeholder="Enter address"
                        onChange={(e) => setAddress(e.target.value)}
                        value={address}
                    />
                </div>
                <div className="mb-3">
                    <button type="submit" className="btn btn-primary">Update Contact</button>
                </div>
            </form>

            <Link to="/">Back to Contacts</Link>
        </div>
    );
};
export default EditContact;