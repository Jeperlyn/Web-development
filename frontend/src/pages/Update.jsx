import React, { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const Update =()=>{
    const [shoe, setShoe]=useState({
        prod_name:"",
        prod_description:"",
        image:"",
        price: null,
    });

    const navigate= useNavigate();
    const location= useLocation();
    const shoeId= location.pathname.split("/")[2];

    const handleChange=(e)=>{
        setShoe((prev)=>({...prev, [e.target.name]: e.target.value}))
    };

    const handleClick= async(e)=>{
        e.preventDefault()
        try{
            await axios.put(`http://localhost:8800/shoes/${shoeId}`,shoe );
            navigate("/")
        } catch(err){
            console.log(err)
        }
    }


    console.log(shoe)
    return(
        <div className='form'>
        <h1> Update item </h1>
        <input type= "text" placeholder='name' onChange={handleChange} name="prod_name"/>
        <input type= "text" placeholder='description' onChange={handleChange} name="prod_description"/>
        <input type= "number" placeholder='price' onChange={handleChange} name="price"/>
        <input type= "text" placeholder='image' onChange={handleChange} name="image"/>

        <button onClick={handleClick}> Update </button>
        </div>
    )
}

export default Update