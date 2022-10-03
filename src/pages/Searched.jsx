import React, { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import axios from 'axios';

import data from '../utils/Data';

function Searched() {
    const [searchedRecipes, setSearchedRecipes] = useState([]);
    let params = useParams();

    useEffect(() => {
        getSearched(params.search)
    },[params.Search]);

    const getSearched = async() => {
        const url = data.url.base + data.url.recipe + data.spoonacularKey + "&number=10&tags=complexSearch&Query=name";
        axios.get(url).then(res => {
            console.log(res.data);
            setSearchedRecipes(res.data.recipes);
            console.log(data.recipes);
        }).catch(error => {
            console.log(error);

        });
    };

    return (
      <div>
       Searched
      </div>
    );
  }
export default Searched;