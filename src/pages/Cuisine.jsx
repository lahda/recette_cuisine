import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import data from "../utils/data.js";

function Cuisine(){

    const [cuisine, setCuisine] = useState([]);

    useEffect(() => {
        getCuisine()
    },[]);

    const getCuisine = async() => {
        const url = data.url.base + data.url.cuisine + data.spoonacularKey + "&number=10&tags=ComplexeResearch";
        axios.get(url).then(res => {
            console.log(res.data);
            setCuisine(res.data.recipes);
            console.log(data.recipes);
        }).catch(error => {
            console.log(error);
        });
    };

    return (
        <>
            <div>cuisine</div>
        </>
    );
}

export default Cuisine;
