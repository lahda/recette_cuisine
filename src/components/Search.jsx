import React from "react";
import styled from "styled-components";
import { useState } from "react";
import {FaSearch} from "react-icons/fa";
import {useNavigate} from "react-router-dom";




function Search() {
    const[input, setInput]= useState("");
    const navigate= useNavigate();
    const submitHandler= (e)=> {
        e.preventDefault();
        navigate('/Searched/' + input);
    };
    return (
      <div>
        <FormStyle OnSubmit={submitHandler}>
            <FaSearch></FaSearch>
            <div>
             <input 
             OnChange ={(e)=> setInput(e.target.value)}
             type="text" 
             value={input}
             />
            </div> 
        </FormStyle>
      </div>
    );
  }
  const FormStyle= styled.form`
  margin:0rem 20rem;
  div{
    position: relative;
    width:100%;
  }
  input{
    border: none;
    background:linear-gradient(35deg, #464646, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 2rem;
    border:none;
    border-radius:1rem;
    outline:none;
    width: 100%;
  }
  svg{
    position:absolute;
    top:5O%;
    left:0%;
    transform: translate(100%, -50%);
    color:white;
  }
  `
  
  export default Search;