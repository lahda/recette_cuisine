import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import data from "../utils/data.js";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import '@splidejs/react-splide/css';

import "./styles.css"

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
        <>           
            <div className="wrapper">
                <h3>salades populaires</h3>
                <Splide options = {{
                    perPage: 4,
                    arrows: false,
                    pagination: false,
                    drag: "free",
                    gap: "4rem",
                }}>
                    {
                        salades.map((recipe) => {
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

// const Wrapper = styled.div`
// margin : 4rem 0rem;
// `;
// const Card = styled.div
//  ` min-height: 25rem;
//    border-radius: 5rem; 
//    overflow: hidden;
//    position: relative;
//    img{
//     border-radius: 2rem;
//     positon: absolute;
//     left: 0;
//     with: 100%;
//     height: 100%;
//     object-fit: cover;

//    }
//  `;
//  const Gradient = styled.div`
//   z-index: 3;
//   with: 100%;
//   height: 100%;
//   background-color: linear-gradient(rgb(0,0,0,0));
//  `;

export default Salades;
