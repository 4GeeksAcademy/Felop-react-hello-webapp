import React, { useState, useEffect, useRef, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


const AddContact = () => {



    const { store, actions } = useContext(Context)
    let navigate = useNavigate();
    const { id } = useParams();

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");


    function savedContact(e) {
        e.preventDefault()
        if (name.trim() == "" || email.trim() == "" || address.trim() == "") {
            alert("All fields are required.")
            return;
        }

        const payload = {
            name: name,
            phone: phone,
            email: email,
            address: address
        };
        if (!id) {
            actions.createContact(payload)
        } else {
            actions.editContact(id, payload)
        }
        alert("Contac saved succesfully");
        navigate("/");   // por que se usa solo este y no los otros 4
        setName("");
        setPhone("");
        setEmail("");
        setAddress("");


    }


    useEffect(() => {
        if (id && store.listContacts.length > 0) {  // si no funciona revisa que la const contact (currentContact)
            const contact = store.listContacts.find((contact) => contact.id === parseInt(id));  // por que parseInt en ves de simplemnte id 
            if (contact) {
                setName(contact.name);
                setPhone(contact.phone);
                setEmail(contact.email);
                setAddress(contact.address);


            }
        }
    }, [id, store.listContacts]);


    return (
        <div className="container">
            <h1 className="text-center">{id ? ` Edit Contact: ${name} ` : "Add a New Contact"}</h1>

            <form onSubmit={handleSubmit} className="container">
                <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input type="text" className="Full name" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>

                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="text" className="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>

                <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input type="text" className="Enter Phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                </div>

                <div className="mb-3">
                    <label className="form-label">Addres</label>
                    <input type="text" className="Enter Addres" value={address} onChange={(e) => setAddress(e.target.value)} required />
                </div>
                <button type="submit" className="btn btn-primary">
                    {id ? "Update" : "Save"}
                </button>
            </form>
            <Link to = "/">Back to Contacs</Link>
        </div>
    )

}
export default AddContact;