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
      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={contacts.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={contacts.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={contacts.phone}
          onChange={handleChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={contacts.address}
          onChange={handleChange}
        />
        <button type="submit">Save</button>
      </form>

      <Link to="/">Back to Contacs</Link>
    </div>
  )

}
export default AddContact;