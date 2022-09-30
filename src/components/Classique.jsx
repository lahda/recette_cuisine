import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import data from "../utils/data.js";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import '@splidejs/react-splide/css';

import "./styles.css"

function Classique(){
    const [classique, setClassique] = useState([]);

    useEffect(() => {
        getClassique()
    },[]);

    const getClassique = async() => {
        const url = data.url.base + data.url.recipe + data.spoonacularKey + "&number=9&tags=vegetarian";
        axios.get(url).then(res => {
            console.log(res.data);
            setClassique(res.data.recipes);
            console.log(data.recipes);
        }).catch(error => {
            console.log(error);
        });
    };

    return(
        <>           
            <div className="wrapper">
                <h3>Classique</h3>
                <Splide options = {{
                    perPage: 4,
                    arrows: false,
                    pagination: false,
                    drag: "free",
                    gap: "4rem",
                }}>
                    {
                        classique.map((recipe) => {
                        return (
                                <SplideSlide>
                                    <div className="card">
                                        <p>{recipe.title}</p>
                                        <img src={recipe.image} alt={recipe.title}/>
                                        <div className="gradient"/>
                                    </div>
                                </SplideSlide>
                            );
                        })
                    }
                </Splide>
            </div>           
        </>
    );   
}
export default Classique;