import Classique from "../components/Classique";
import Populaire from "../components/Populaire";
import React from "react";

function Home(){
    return(
        <div>
            <Classique />
            <Populaire /> 
        </div>    
    );
}
export default Home;