import React, { useState, useContext } from "react";
import { Link, useNavigate, } from "react-router-dom";
import { Context } from "../store/appContext";




const AddContact = () => {



  const { store , actions } = useContext(Context)
  let navigate = useNavigate();

  const [contacts, setContacts] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });


  const handleChange = (e) => {
    setContacts({ ...contacts, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      let resultado = await actions.addContact(contacts);
      if (resultado) {
        navigate("/Contacts");
      } else {
        alert("No recibimos el ID al guardar un nuevo contacto")
      }
    } catch (error) {
      console.error("Error al guardar el contacto", error);
    }

  };
  




  return (
    <div className="container">
            <h1 className="text-center">Add New Contact</h1>

            <form className="container" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput1" className="form-label">Full Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput1"
                        placeholder="Full name"
                        name="name"
                        value={contacts.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="formGroupExampleInput2"
                        placeholder="Enter email"
                        name="email"
                        value={contacts.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput3" className="form-label">Phone</label>
                    <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput3"
                        placeholder="Enter phone"
                        name="phone"
                        value={contacts.phone}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput4" className="form-label">Address</label>
                    <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput4"
                        placeholder="Enter address"
                        name="address"
                        value={contacts.address}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <button type="submit" className="btn btn-primary">Save Contact</button>
                </div>
            </form>

            <Link to="/" className="btn btn-secondary">Back to Contacts</Link>
        </div>
  )

}
export default AddContact;