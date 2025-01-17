import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import {Context} from '../store/appContext'

const ContactCard = ({contact}) =>{
    const {store,actions} =useContext(Context)

    const handleDelete = () => {
        console.log("Eliminando contacto:", contact);
        actions.deleteContact(contact.id);
    };
    
    return(
        
        <li className="list-group-item d-flex justify-content-center" >
            <div className="d-flex align-items-center">
                <img className="rounded-circle"
                    src="https://picsum.photos/170/170/"
                    alt="Contact"
                />

                < div className="ms-3">
                    <h5 className="mb-0">{contact.name}</h5>
                    <p>{contact.email}</p>
                    <p>{contact.phone}</p>
                    <p>{contact.address}</p>
                </div>
            </div>
            <div>
                <Link to = {`/addContact/${contact.id}`} className="btn btn-link">
                Edit
                </Link>
                <button className="btn btn-link text-danger"
                data-bs-toggle="modal"
                data-bs-target={`#deleteModal-${contact.id}`}
                >
                    Delete
                </button>
                <div className="modal fade" id={`deleteModal-${contact.id}`}
                tabIndex={-1}
                aria-labelledby="deleteModalLabel"
                aria-hidden="true"
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="deleteModaLabel">
                                    Confirm Delete
                                </h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                            </div>
                            <div className="modal-body">Are you sure you want to delete this contact?</div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                    Cancel
                                </button>
                                <button type="button" className="btn btn-danger" onClick={handleDelete} data-bs-dismiss="modal">
                                    Yes, Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )

}
export default ContactCard;