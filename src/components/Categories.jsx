import {FaPizzaSlice, FaHamburger} from "react-icons/fa";
import {GiNoodles, GiChopsticks} from "react-icons/gi";
import styled from "styled-components";
import {NavLink} from "react-router-dom";


function Categories() {
    return(
        <List>
            <NavLink to={"/Cuisine/Italian"}>
               <FaPizzaSlice/>
               <h4>Italien</h4>  
            </NavLink>
            <NavLink to={"/Cuisine/American"}>
               <FaHamburger/>
               <h4>Americain</h4>  
            </NavLink>
            <NavLink to={"/Cuisine/French"}>
               <GiNoodles/>
               <h4>Français</h4>  
            </NavLink>
            <NavLink to={"/Cuisine/japanese"}>
               <GiChopsticks/>
               <h4>Japon</h4>  
            </NavLink>
        </List>
        
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


