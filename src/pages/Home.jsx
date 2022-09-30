import Classique from "../components/Classique";
import Populaire from "../components/Populaire";
import React from "react";
import Categories from "../components/Categories";
import Search from "../components/Search";
import Searched from "./Searched";



function Home(){
    return(
        <div>
            <Search/>
            <Categories/>
            <Classique />
            <Populaire /> 
        </div>    
    );
}
export default Home;