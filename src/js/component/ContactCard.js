import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import {Context} from '../store/appContext'

const CardContact = ({contact}) =>{
    const {store,actions} =useContext(Context)

    const eliminarContacto = () =>{
        console.log(contact)
        actions.deleteContact(contact.id)
    };
    
    return(
        <li className="list-group-item d-flex justify-content-center" >

        </li>
    )

}
export default CardContact