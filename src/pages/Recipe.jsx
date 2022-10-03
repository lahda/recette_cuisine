import React from "react";
import {useEffect, useState} from "react";
import data from "../utils/Data";
import axios from "axios";


function Recipe(){
    const [details, setDetails] = useState();
    useEffect(() => {
        getDetails()
    },[]);
    const getDetails = async () =>{
        const url = data.url.base + data.url.recipe + data.spoonacularKey + "&number=9&tags=information";
        axios.get(url).then(res => {
            console.log(res.data);
            setDetails(res.data.recipes);
            console.log(data.recipes);
        }).catch(error => {
            console.log(error);
        });
    }
    return(
        <div>
            {details.title}
        </div>    
    );
}
export default Recipe;