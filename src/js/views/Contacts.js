import React, { useState, useEffect, useRef, useContext } from "react";
import { Link } from 'react-router-dom'
import { Context } from "../store/appContext.js";
import ContactCard from "../component/ContactCard.js";


const Contacts = () =>{
    const {store,actions} = useContext (Context)
    console.log(store.listContacts)


    return (
        <div className="container">
            <div className="d-flex justify-content-end">
                <Link to="/addContact">
                <button className=" btn btn-success"> Add New Contact</button>
                </Link>
            </div>
            <ul className="list-group mt-3">
                {store.listContacts && store.listContacts.lenght >0 ?(
                    store.listContacts.map((contact) =>(
                        <CardContact key ={contact.id} contact={contact} />
                    ))
                ):(
                    <p>No contacts found</p>
                )}
            </ul>
        </div>
    );


};

export default Contacts ;