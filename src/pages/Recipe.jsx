import React from "react";
import {useEffect, useState} from "react";
import data from "../utils/data";
import axios from "axios";
import {useParams} from "react-router-dom";
import "./Recipe.css";


function Recipe(){
    const [details, setDetails] = useState();
    const [activeTab, setActiveTab] = useState("instructions");
    let params = useParams();

    const getDetails = async (name) =>{
        const url = data.url.base + data.url.recipeTarget + name + "/information" + data.spoonacularKey;
        console.log(url);
        await axios.get(url).then(res => {
            console.log(res.data);
            setDetails(res.data);
        }).catch(error => {
            console.log(error);
        });
        console.log(details);
    }
    useEffect(() => {
        getDetails(params.name)
    });

    return(
       
        <div className="DetailWrapper">
            <div>
            <h2>{params.name}</h2> 
            <img src={params.name} alt=""/>
            </div>  
            <div className="info">
                <button className={activeTab=== "instructions" ? "active": "" } 
                onClick = {() => setActiveTab('instructions')}>Instructions</button>
                <button className={activeTab === "ingredients" ? "active": "" } 
                onClick = {() => setActiveTab('ingredients')}>Ingredients</button>
            {activeTab ==='instructions' && (
                 <div>
                 <h3 dangerouslySetInnerHTML={{__html: params.name}}></h3>
                 <h3 dangerouslySetInnerHTML={{__html: params.name}}></h3>
             </div>
            )}
            </div> 
            {activeTab === 'ingredients' && (
                <ul>
                {details.extendedIngredients.map((ingredient) =>(
                    <li key={ingredient.id}>{ingredient.original}</li>
                ))}
            </ul>

            )};
            
       </div>    
    );
}
export default Recipe;