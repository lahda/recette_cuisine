import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import data from "../utils/data.js"
import styled from "styled-components"

function Salades(){

    const [salades, setSalades] = useState([]);

    useEffect(() => {
        getSalades()
    },[]);

    const getSalades = async() => {
        const url = data.url.base + data.url.recipe + data.spoonacularKey + "&number=10&tags=vegetarian,dessert";
        axios.get(url).then(res => {
            console.log(res.data);
            setSalades(res.data.recipes);
            console.log(data.recipes);
        }).catch(error => {
            console.log(error);
        });
    };
    
    
    return (
        <div>
            {
                salades.map((recipe) => {
                    return (
                        <Wrapper>
                            <h3>salades populaires</h3>
                            {salades.map((recipe) =>{
                                return(
                                    <Card>
                                        <p>{recipe.title}</p>
                                        <img src={recipe.image} alt={recipe.title}/>
                                    </Card>
                                );
                            })}
                        </Wrapper>
                        
                    );
                })
            }
        </div>
    );   
}
const Wrapper = styled.div`
margin : 4rem 0rem;
`;
const Card = styled.div
 ` min-height: 25rem;
   border-radius: 5rem; 
 `;
export default Salades;
