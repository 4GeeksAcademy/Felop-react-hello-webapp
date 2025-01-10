import React, { useState, useRef, useEffect, useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Context } from "../store/appContext.js";

const EditContact = () =>{
    const {store,actions} = useContext(Context)
    let navigate =useNavigate();
}

export default EditContact;