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

const List = styled.div `
     display: flex;
     justify-content: center;
     margin: 2rem 0rem;
`;
const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131);
    width: 6rem;
    height:6rem;
    cursor: pointer;
    transform: scale(0.8);
    h4:{
        color: white;
        font-size:0.8rem;
    }
    svg{
        color: white;
        font-size: 1.5rem;
    }
    &.active{
        background: linear-gradient(to right, #f27121, #e94057);
    svg{
        color: white;
    }
    h4{
        color:white;
    }

    }
`
export default Categories;


