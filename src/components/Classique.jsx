import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import data from "../utils/data";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
// import { useNavigate } from "react-router-dom";

import "./styles.css"

function Classique(){
    const [classique, setClassique] = useState([]);
    // const navigate = useNavigate()

    useEffect(() => {
        getClassique()
    }, []);

    const getClassique = () => {
        const url = data.url.base + data.url.recipe + data.spoonacularKey + "&number=9&tags=vegetarian";
        axios.get(url).then(res => {
            const b = res.data.recipes
            console.log(b)
            setClassique(b);
            console.log(classique);
        }).catch(error => {
            console.log(error);
        });
    };

    return(
        <>           
            <div className="wrapper">
                <h3>Classiques</h3>
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
                                <SplideSlide key={recipe.id}>
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