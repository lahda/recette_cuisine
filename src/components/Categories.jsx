import {FaPizzaSlice, FaHamburger} from "react-icons/fa";
import {GiNoodles, GiChopsticks} from "react-icons/gi";
import styled from "styled-components";
import {NavLink} from "react-router-dom";

import './Categories.css';

function Categories() {
    return(
        <div className="list">
            <NavLink to={"/Cuisine/Italian"}>
                <div className="slink">
                    <FaPizzaSlice className="svg-1"/>
                    <h4 className="h4-1">Italian</h4>
                </div>
            </NavLink>
            <NavLink to={"/Cuisine/American"}>
                <div className="slink">
                    <FaHamburger className="svg-1"/>
                    <h4 className="h4-1">American</h4>
                </div>
            </NavLink>
            <NavLink to={"/Cuisine/French"}>
                <div className="slink">
                    <GiNoodles className="svg-1"/>
                    <h4 className="h4-1">Thai</h4>
                </div>
            </NavLink>
            <NavLink to={"/Cuisine/japanese"}>
                <div className="slink">
                    <GiChopsticks className="svg-1"/>
                    <h4 className="h4-1">Japanese</h4>
                </div>
            </NavLink>
        </div>
    ); 
}

export default Categories;


