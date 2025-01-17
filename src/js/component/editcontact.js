import React, {useState,useContext,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

const editContact= ({contactId}) =>{
    const {store,actions} = useContext(Context);
    const navigate = useNavigate();
}

const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
});