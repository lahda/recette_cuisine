import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import data from "../utils/data.js"

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
        }).catch(error => {
            console.log(error);
        });
    };
    
    
    return (
        <div>
            {
                salades.map((recipe) => {
                    return (
                        <div key={recipe.id}>
                            <p>{recipe.title}</p>
                        </div>
                    );
                })
            }
        </div>
    );   
}
export default Salades;
