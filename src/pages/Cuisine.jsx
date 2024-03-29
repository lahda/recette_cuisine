import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import data from "../utils/data";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {useParams} from "react-router-dom";





function Cuisine(){
    const [cuisine, setCuisine] = useState([]);
    let params = useParams();

    const getCuisine = async(name) => {
        console.log(name);
        const url = data.url.base + data.url.research + data.spoonacularKey + "&cuisine=" + name;
        console.log(url);
        await axios.get(url).then(res => {
            console.log(res.data);
            setCuisine(res.data.results);
            console.log(data);
        }).catch(error => {
            console.log(error);
        });
    };
    useEffect(() => {
        getCuisine(params.type);
       
    },[params.type]);

    return (
        <>
            <Grid
              animate = {{opacity: 1}}
              initial = {{opacity: 0}}
              exit = {{opacity: 0}}
              transition = {{duration: 0.5}}
            >
               {cuisine.map((item) =>{
                  return (<Card key={item.id}>
                   <Link to ={"/recipe/" + item.id }>
                      <img src={item.image} alt=""/>
                      <h4>{item.title}</h4>
                   </Link>
                </Card>
                );
               })}
            </Grid>
        </>
    );
}
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-grap: 3rem;
`;
const Card= styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;
export default Cuisine;
