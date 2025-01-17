import React, { useState, useEffect, useRef, useContext } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { Context } from "../store/appContext.js";
import ContactCard from "../component/ContactCard.js";


const Contacts = () => {
    const { store, actions } = useContext(Context)
    const [agendaName, setAgendaName] = useState("") //nombre del contacto
    const navigate= useNavigate();

    
    const addContactHandler = ( )=>{
        console.log("handler agenda se ve asi:",agendaName);
        actions.setCurrrentName(agendaName);
        navigate("/AddContact");
    }

    


    return (
        <div className="container">
            <h1>Contact List</h1>
            <div className="d-flex justify-content-end">
                
                <Link to="/addContact">
                <button className=" btn btn-success"> Add New Contact</button>
                </Link>
            </div>
            <ul className="list-group mt-3">
                {store.listContacts && store.listContacts.length >0 ?(
                    store.listContacts.map((Contacs) =>(
                        <ContactCard key ={Contacs.id} contact={Contacs} />
                    ))
                ):(
                    <p>No contacts found</p>
                )}
            </ul>
        </div>
    );


};

export default Contacts ;